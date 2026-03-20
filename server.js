const express = require("express");
const cors    = require("cors");
const books   = require("./data/books");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://react-ebookstore.vercel.app"
  ]
}));

app.use(express.json());

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/genres", (req, res) => {
  const genres = [...new Set(books.map(b => b.genre))];
  res.json(genres);
});

app.get("/", (req, res) => {
  res.send("Ebookstore API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});