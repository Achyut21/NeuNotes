import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createSubcategory = async (req, res) => {
  const { categoryId, title } = req.body;

  try {
    const subcategory = await prisma.subcategory.create({
      data: {
        category_id: parseInt(categoryId),
        title,
      },
    });
    res.status(201).json(subcategory);
  } catch (error) {
    console.error("Error creating subcategory:", error);
    res.status(500).json({ error: "Failed to create subcategory" });
  }
};

export const getSubcategories = async (req, res) => {
  // Optionally filter by categoryId if provided as a URL parameter
  const { categoryId } = req.params;
  try {
    let subcategories;
    if (categoryId) {
      subcategories = await prisma.subcategory.findMany({
        where: { category_id: parseInt(categoryId) },
      });
    } else {
      subcategories = await prisma.subcategory.findMany();
    }
    res.status(200).json(subcategories);
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Failed to fetch subcategories" });
  }
};

export const updateSubcategory = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const updatedSubcategory = await prisma.subcategory.update({
      where: { subcat_id: parseInt(id) },
      data: { title },
    });
    res.status(200).json(updatedSubcategory);
  } catch (error) {
    console.error("Error updating subcategory:", error);
    res.status(500).json({ error: "Failed to update subcategory" });
  }
};

export const deleteSubcategory = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.subcategory.delete({
      where: { subcat_id: parseInt(id) },
    });
    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    console.error("Error deleting subcategory:", error);
    res.status(500).json({ error: "Failed to delete subcategory" });
  }
};