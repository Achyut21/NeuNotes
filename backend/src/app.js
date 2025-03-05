// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./middleware/logger.js";
import { verifyAuth } from "./middleware/firebaseAuth.js";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";


// Load environment variables from .env
dotenv.config();

const app = express();


// Use logging middleware
app.use(logger);

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

app.use(errorHandler);

export default app;
