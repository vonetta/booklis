import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getBooksRequest } from '../actions/books';
import BookForm from "./bookForm";
import BookList from "./bookList";
import Login from './login';
import NewUserForm from './newUser';
import Nav from "./nav";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../custom.css";
import 'react-toastify/dist/ReactToastify.min.css';
// import { toast } from 'react-toastify';

class App extends Component {
  state = {
    color: '',
    navColor: ''
  }

  generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };


  componentDidMount() {
    this.props.getBooksRequest()
    // let color = this.generateRandomColor()
    // let navColor = this.generateRandomColor()
    setInterval(() => {
      let color = this.generateRandomColor()
      let navColor = this.generateRandomColor()
      // let color = this.generateRandomColor()
      // let navColor = this.generateRandomColor()

      this.setState({
        color: color,
        navColor: navColor
      })
    }, 5000)
    // toast.success("Your Book List are loaded")
  }
  render() {
    const bookList = this.props.books.bookList
    return (
      <div className="container-fluid" style={{ backgroundColor: this.state.color }}>
        <Nav color={this.state.navColor} />
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

