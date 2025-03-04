// backend/src/controllers/category.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Create a new category.
 * Expects { name, description } in the request body.
 * In a real app, you’d also check the role (faculty) from req.user.
 */
export const createCategory = async (req, res) => {
  const { name, description } = req.body;
  // For now, we assume req.user.uid represents a faculty ID.
  const facultyId = req.user.uid;

  try {
    const category = await prisma.category.create({
      data: {
        name,
        description,
        createdBy: parseInt(facultyId), // or however your UID should be stored
      },
    });
    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

/**
 * Get all categories.
 */
export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};