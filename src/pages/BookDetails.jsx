import { useParams, useNavigate } from "react-router-dom";
import books from "../data";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div style={styles.container}>
      <img src={book.image} alt={book.title} style={styles.image} />
      <div style={styles.details}>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}</p>
        <button onClick={() => navigate("/browse")} style={styles.button}>
          ⬅ Back to Browse
        </button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    padding: "1rem",
    flexWrap: "wrap",
  },
  image: {
    width: "200px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  details: {
    maxWidth: "600px",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default BookDetails;

