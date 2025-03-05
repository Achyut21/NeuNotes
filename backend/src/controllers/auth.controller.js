// src/controllers/auth.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Get the authenticated user's profile.
 * Assumes req.user contains a property "uid" that corresponds to your User model's id.
 */
export const getUserProfile = async (req, res) => {
  const uid = parseInt(req.user.uid); // adjust if your uid is not numeric
  try {
    const user = await prisma.user.findUnique({
      where: { id: uid },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

/**
 * Update the authenticated user's profile.
 * Expects { name } in the request body.
 */
export const updateUserProfile = async (req, res) => {
  const uid = parseInt(req.user.uid);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const updatedUser = await prisma.user.update({
      where: { id: uid },
      data: { name },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ error: "Failed to update user profile" });
  }
};