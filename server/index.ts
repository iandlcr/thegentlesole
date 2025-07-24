// Static server for The Gentle Sole website
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve built static files
app.use(express.static(path.join(__dirname, "..", "dist", "public")));

// Handle SPA routing - serve index.html for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`The Gentle Sole website running on port ${PORT}`);
});