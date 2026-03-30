const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Dummy data (no MongoDB for now, keep it simple)
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 2000 }
];

// API
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});