import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <BookContextProvider>
          <Navbar />
        </BookContextProvider>
      </header>
    </div>
  );
};

export default App;
