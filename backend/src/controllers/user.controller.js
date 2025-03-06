// src/controllers/user.controller.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Sync the authenticated user's information to the database.
 * This endpoint should be called after a successful Firebase login.
 */
export const syncUser = async (req, res) => {
    // req.user is populated by verifyAuth middleware
    const { uid, email, displayName } = req.user;
  
    try {
      const user = await prisma.user.upsert({
        where: { id: uid },
        update: {
          email,
          name: displayName,
        },
        create: {
          id: uid,
          email,
          name: displayName,
          role: "STUDENT", // New users default to STUDENT
        },
      });
      console.log("Synced user:", user); 
      res.status(200).json(user);
    } catch (error) {
      console.error("Error syncing user:", error);
      res.status(500).json({ error: "Failed to sync user" });
    }
  };

/**
 * Update a user's role.
 * Expects { userId, role } in the request body.
 */
export const updateUserRole = async (req, res) => {
  const { userId, role } = req.body;
  const allowedRoles = ["ADMIN", "FACULTY", "STUDENT"];
  if (!userId || !role || !allowedRoles.includes(role)) {
    return res.status(400).json({ error: "Missing or invalid userId or role" });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ error: "Failed to update role" });
  }
};