const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, video) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 D Fitness Studio website running at http://localhost:${PORT}`);
});
