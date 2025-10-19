const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use(express.json());

const DATA_FILE = "./messages.json";

// Serve main.html instead of index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

// --- Your message endpoints ---
app.get("/messages", (req, res) => {
  const data = fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE))
    : [];
  res.json(data);
});

app.post("/messages", (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === "") return res.status(400).send("Empty message");

  const data = fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE))
    : [];

  data.push(text);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on:
  - Local: http://localhost:${PORT}
  - Radmin: http://<YOUR_RADMIN_IP>:${PORT}`);
});

