import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * Log a new activity. Expects { action } in the request body.
 */
export const logActivity = async (req, res) => {
  const { action } = req.body;
  // Assume req.user.uid holds the authenticated user's id
  const userId = parseInt(req.user.uid);

  if (!action) {
    return res.status(400).json({ error: "Action is required" });
  }

  try {
    const activity = await prisma.activity.create({
      data: {
        userId,
        action,
      },
    });
    res.status(201).json(activity);
  } catch (error) {
    console.error("Error logging activity:", error);
    res.status(500).json({ error: "Failed to log activity" });
  }
};

/**
 * Get activity logs for the authenticated user.
 */
export const getUserActivity = async (req, res) => {
  const userId = parseInt(req.user.uid);
  try {
    const activities = await prisma.activity.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
    });
    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ error: "Failed to fetch activity logs" });
  }
};