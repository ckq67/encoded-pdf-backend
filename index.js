const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to return the Base64 string
app.get("/getcode", (req, res) => {
  const filePath = path.join(__dirname, "base64.txt");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read file" });
    }

    res.json({ pdfContent: data });
  });
});

// Use the PORT provided by Render, or default to 3000 for local development
const PORT = process.env.PORT || 3000;

// Listen on 0.0.0.0 to accept external connections
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
