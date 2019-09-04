import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Nav from "./Nav";
import BookForm from "./BookForm";
import BookList from "./BookList";
import NewUser from "./NewUser";
import Teams from "./Teams";
import NewTeam from "./NewTeam";
import Login from "./Login";

import "../custom.css";

import { getBooks } from "../api/books";

const App = () => {
  let [bookCollection, setBookCollection] = useState();
  useEffect(() => {
    async function retrieveBookList() {
      let bookList = await getBooks();
      setBookCollection(bookList.data);
    }
    retrieveBookList();
  }, []);

  return (
    <div className="app">
      <Nav />

      <Switch>
        <Route path="/new-book" component={BookForm} />
        <Route path="/new-team" component={NewTeam} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={NewUser} />
        <Route
          path="/books"
          render={() => <BookList bookList={bookCollection} />}
        />
        <Route path="/teams" component={Teams} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
