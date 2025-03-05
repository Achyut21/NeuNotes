// Updated src/controllers/search.controller.js
import { PrismaClient } from '@prisma/client';
import { getCache, setCache } from '../utils/cache.js';
const prisma = new PrismaClient();

export const search = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }
  
  // Check cache first
  const cacheKey = `search:${query}`;
  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  try {
    const categories = await prisma.category.findMany({
      where: { name: { contains: query, mode: 'insensitive' } }
    });
    
    const uploads = await prisma.upload.findMany({
      where: {
        fileMetadata: {
          fileName: { contains: query, mode: 'insensitive' }
        }
      },
      include: { fileMetadata: true }
    });
    
    const result = { categories, uploads };
    
    // Cache the result for 1 hour (3600 seconds)
    await setCache(cacheKey, result, 3600);
    
    res.status(200).json(result);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search failed" });
  }
};