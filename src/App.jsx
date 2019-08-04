import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </header>
    </div>
  );
};

export default App;
