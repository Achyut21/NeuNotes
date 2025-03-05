// src/controllers/upload.controller.js
import { PrismaClient } from "@prisma/client";
import admin from "../firebaseAdmin.js";

const prisma = new PrismaClient();

export const createUpload = async (req, res) => {
  const { fileName, category, description } = req.body;
  const file = req.file;

  if (!file || !fileName || !category) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Use the Firebase UID as a string
  const uploadedBy = req.user.uid;

  // Explicitly pass the bucket name from the environment variable
  const bucket = admin.storage().bucket(process.env.FIREBASE_STORAGE_BUCKET);
  const timestamp = Date.now();
  const storageFileName = `uploads/${timestamp}_${file.originalname}`;

  try {
    await bucket.file(storageFileName).save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    // Make the file publicly accessible
    await bucket.file(storageFileName).makePublic();

    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${storageFileName}`;

    const upload = await prisma.upload.create({
      data: {
        uploadedBy,
        subcategoryId: parseInt(category) || null,
        fileMetadata: {
          create: {
            fileName,
            fileType: file.mimetype,
            fileSize: file.size,
            fileUrl: publicUrl,
            description: description || "",
          },
        },
      },
      include: { fileMetadata: true },
    });
    res.status(201).json(upload);
  } catch (error) {
    console.error("Error creating upload:", error);
    res.status(500).json({ error: "Failed to create upload" });
  }
};
