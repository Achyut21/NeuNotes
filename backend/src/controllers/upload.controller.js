import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Handle a new file upload.
 * For now, we simulate file upload by accepting metadata.
 */
export const createUpload = async (req, res) => {
  const { fileName, fileType, fileSize, fileUrl, description, subcategoryId } = req.body;
  // Assume req.user.uid holds the uploader's id
  const uploadedBy = parseInt(req.user.uid);

  try {
    // Create the Upload first, then link FileMetadata.
    const upload = await prisma.upload.create({
      data: {
        uploadedBy,
        subcategoryId,
        fileMetadata: {
          create: { fileName, fileType, fileSize, fileUrl, description },
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
