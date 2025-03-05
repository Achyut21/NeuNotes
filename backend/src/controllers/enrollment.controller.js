import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const enrollStudent = async (req, res) => {
  const { categoryId } = req.body;
  // For now, assume req.user.uid holds the student's ID.
  // In a real app, convert or map it to your internal student ID.
  const studentId = parseInt(req.user.uid); // adjust as needed

  try {
    const enrollment = await prisma.enrollment.create({
      data: { studentId, categoryId },
    });
    res.status(201).json(enrollment);
  } catch (error) {
    console.error("Enrollment error:", error);
    res.status(500).json({ error: "Failed to enroll student" });
  }
};

export const getEnrollments = async (req, res) => {
  const studentId = parseInt(req.user.uid);
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId },
    });
    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
};
