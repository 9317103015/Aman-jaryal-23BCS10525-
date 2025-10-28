import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // ✅ Filter books for search results
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Add new book
  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // ✅ Remove book by ID
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Library Management</h2>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by title or author"
        style={styles.inputFull}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ➕ Add Book Form */}
      <div style={styles.addForm}>
        <input
          type="text"
          placeholder="New book title"
          style={styles.input}
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          style={styles.input}
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button style={styles.addBtn} onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* 📚 Display Books */}
      {filteredBooks.map((book) => (
        <div key={book.id} style={styles.bookItem}>
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
          <button style={styles.removeBtn} onClick={() => removeBook(book.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

// ✅ ✅ Inline Styling ✅ ✅
const styles = {
  container: {
    border: "2px solid #000",
    padding: "20px",
    margin: "20px",
    borderRadius: "8px"
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  inputFull: {
    width: "100%",
    padding: "8px",
    marginBottom: "12px"
  },
  addForm: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addBtn: {
    padding: "8px 12px",
    cursor: "pointer"
  },
  bookItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#74d426ff",
    padding: "10px",
    marginBottom: "8px",
    border: "1px solid #1df332ff",
    borderRadius: "6px"
  },
  removeBtn: {
    padding: "6px 10px",
    background: "#d7b323ff",
    cursor: "pointer",
    border: "1px solid gray",
    borderRadius: "4px"
  }
};

export default App;
