import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({
          type: "ADD_BOOK",
          book: { title, author },
        });
        setAuthor("");
        setTitle("");
      }}
    >
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='book author'
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input type='submit' value='Add book' />
    </form>
  );
};

export default BookForm;
