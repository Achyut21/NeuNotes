// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { verifyAuth } from "./middleware/firebaseAuth.js";
import routes from "./routes/index.js";


// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use all routes under /api
app.use("/api", routes);

// Basic root endpoint (health check)
app.get("/", (req, res) => {
  res.send("NeuNotes Backend is running!");
});

app.get("/protected", verifyAuth, (req, res) => {
  res.json({ message: `Hello, user ${req.user.uid}!` });
});

export default app;
