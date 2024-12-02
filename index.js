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

  // Read the Base64 string from the file
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read file" });
    }

    res.json({ pdfContent: data });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
