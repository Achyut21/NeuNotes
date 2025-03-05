import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createComment = async (req, res) => {
  const { uploadId, content } = req.body;
  // Assume req.user.uid holds the user's ID
  const userId = parseInt(req.user.uid);

  try {
    const comment = await prisma.comment.create({
      data: {
        uploadId,
        userId,
        content,
      },
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Failed to create comment" });
  }
};

export const getCommentsForUpload = async (req, res) => {
  const { uploadId } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: { uploadId: parseInt(uploadId) },
    });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};