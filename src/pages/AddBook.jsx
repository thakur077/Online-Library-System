import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        newErrors[key] = "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      id: books.length + 1,
      ...form,
      rating: parseFloat(form.rating),
    };

    dispatch(addBook(newBook));
    navigate("/browse");
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {["title", "author", "description", "rating", "category", "image"].map((field) => (
          <div key={field} style={styles.field}>
            <label>{field[0].toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "rating" ? "number" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              style={styles.input}
            />
            {errors[field] && <span style={styles.error}>{errors[field]}</span>}
          </div>
        ))}
        <button type="submit" style={styles.button}>Add Book</button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  field: {
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    backgroundColor: "white",
    color: "#1a1a1a",
  },
  error: {
    color: "red",
    fontSize: "0.8rem",
  },
  button: {
    padding: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default AddBook;
