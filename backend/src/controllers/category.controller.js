// backend/src/controllers/category.controller.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Create a new category.
 * Expects { name, description } in the request body.
 * In a real app, you’d also check the role (faculty) from req.user.
 */
export const createCategory = async (req, res) => {
  const { name, image } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Category name is required" });
  }

  try {
    // Use req.user.uid from your verifyAuth middleware as createdBy
    const newCategory = await prisma.category.create({
      data: {
        name,
        image,
        createdBy: req.user.uid,
      },
    });
    res.status(201).json(newCategory);
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