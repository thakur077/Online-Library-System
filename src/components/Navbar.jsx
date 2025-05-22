import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>📚 Online Library</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #ddd",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
};

export default Navbar;
