import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.books);
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h1>Browse Books {category && `- ${category}`}</h1>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

const styles = {
  searchInput: {
    width: "100%",
    maxWidth: "400px",
    padding: "0.5rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
};

export default BrowseBooks;
