// src/server.js
import app from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`NeuNotes Backend is running on port ${PORT}`);
});