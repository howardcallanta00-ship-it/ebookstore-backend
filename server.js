const express = require("express");
const cors    = require("cors");
const books   = require("./data/books");

const app = express();

// Allow requests from your frontend URLs
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://ebookstore-backend-pm1p.onrender.com"
  ]
}));

app.use(express.json());

// GET all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// GET unique genres
app.get("/api/genres", (req, res) => {
  const genres = [...new Set(books.map(b => b.genre))];
  res.json(genres);
});

// Root route
app.get("/", (req, res) => {
  res.send("Ebookstore API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});