import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <img src={book.image} alt={book.title} style={styles.image} />
      <div>
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}</p>
        <Link to={`/book/${book.id}`}>View Details</Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginBottom: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "6px",
  },
};

export default BookCard;
