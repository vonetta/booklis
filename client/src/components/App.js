import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BookForm from "./bookForm";
import BookList from "./bookList";
// import Login from "./login";
// import NewUserForm from "./newUser";
import Nav from "./nav";
import "../custom.css";
import "react-toastify/dist/ReactToastify.css";
import { getBooks } from "../api/books";

const App = () => {
  let [bookCollection, setBookCollection] = useState();
  useEffect(() => {
    async function retrieveBookList() {
      let bookList = await getBooks();
      setBookCollection(bookList.data);
    }
    retrieveBookList();
  }, [bookCollection]);

  return (
    <div className="app">
      <Nav />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
      />
      <Switch>
        <Route path="/new-book" component={BookForm} />
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/sign-up" component={NewUserForm} /> */}
        <Route path="/" render={() => <BookList bookList={bookCollection} />} />
      </Switch>
    </div>
  );
};

export default App;
