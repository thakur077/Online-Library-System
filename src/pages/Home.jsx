import books from "../data";
import BookCard from "../components/BookCard";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Online Library</h1>

      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href={`/books/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
