import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import BookForm from "./bookForm";
import BookList from "./bookList";
import Login from './login';
import NewUserForm from './newUser';
import Nav from "./nav";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../custom.css";
import { getBooksRequest } from '../actions/books';

class App extends Component {
  componentDidMount() {
    this.props.getBooksRequest()
  }
  render() {
    const bookList = this.props.books.bookList
    return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route path="/new-book" component={BookForm} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={NewUserForm} />
          <Route path="/" render={() => <BookList bookList={bookList} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(({ books }) => ({ books }), {
  getBooksRequest
})(App))

