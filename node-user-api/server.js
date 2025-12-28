const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Tulasi" },
    { id: 2, name: "DevOps Learner" }
  ]);
});

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User created",
    user: req.body
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
