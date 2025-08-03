const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

// Placeholder for future GPT endpoint

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});