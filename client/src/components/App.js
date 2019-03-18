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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';

class App extends Component {
  componentDidMount() {
    this.props.getBooksRequest()
    // toast.success("Your Book List are loaded")
  }
  render() {
    const bookList = this.props.books.bookList
    return (
      <div className="container-fluid">
        <Nav />
        <ToastContainer position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange />
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

