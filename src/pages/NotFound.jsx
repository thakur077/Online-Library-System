import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/" style={styles.link}>← Go Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
  },
  link: {
    marginTop: "1rem",
    display: "inline-block",
    color: "#007bff",
    textDecoration: "underline",
    fontSize: "1rem",
  },
};

export default NotFound;
