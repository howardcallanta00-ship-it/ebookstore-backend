const express  = require("express");
const cors     = require("cors");
const books    = require("./data/books");

const app = express();
app.use(cors());
app.use(express.json());

// GET all books — same as GET /api/products in Module 2
app.get("/api/books", (req, res) => {
  res.json(books);
});

// GET unique genres — same as Module 2's bonus categories endpoint
app.get("/api/genres", (req, res) => {
  const genres = [...new Set(books.map(b => b.genre))];
  res.json(genres);
});

// Root route — confirms server is running
app.get("/", (req, res) => {
  res.send("Ebookstore API is running...");
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});