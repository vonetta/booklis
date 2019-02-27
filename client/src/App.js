import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import BookForm from "./componenets/bookForm";
import BookList from "./componenets/bookList";
import Nav from "./componenets/nav"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./custom.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/new-book" component={BookForm} />
          <Route path="/" component={BookList} />
        </Switch>
      </div>
    );
  }
}

export default App;
