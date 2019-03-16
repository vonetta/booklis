import React, { Component } from "react";
// import { createNewBook, editBook } from "../routes/books";
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { createBookRequest } from '../actions/books'

class BookForm extends Component {
  state = {
    bookEntry: {
      bookName: "",
      totalPages: "",
      currentPage: "",
      dateStarted: ""
    },
    errors: {},
    edited: false
  };

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      return this.handleEdit(this.props.location.state.book);
    }
  }
  handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    this.setState(prevState => ({
      bookEntry: {
        ...prevState.bookEntry,
        [name]: value
      }
    }));
  };

  onChange = date => {

    this.setState(prevState => ({
      bookEntry: {
        ...prevState.bookEntry,
        dateStarted: date
      }
    }));
  }

  handleSubmit = (e, bookData) => {
    e.preventDefault();
    // console.log(this.state.bookEntry, "submit button");
    this.props.createBookRequest({
      bookName: this.state.bookEntry.bookName,
      totalPages: this.state.bookEntry.totalPages,
      currentPage: this.state.bookEntry.currentPage,
      dateStarted: this.state.bookEntry.dateStarted
    })
    this.setState({
      bookEntry: {
        bookName: '',
        totalPages: '',
        currentPage: '',
        dateStarted: ''
      }
    })
    // if (this.state.edited) {
    //   editBook(this.state.bookEntry);
    // } else {
    //   createNewBook(this.state.bookEntry);
    // }
    window.location = "/";
  };

  handleEdit = bookData => {
    console.log(bookData)
    this.setState(prevState => ({
      bookEntry: {
        ...prevState.bookEntry,
        _id: bookData._id,
        bookName: bookData.bookName,
        totalPages: bookData.totalPages,
        currentPage: bookData.currentPage,
        dateStarted: bookData.dateStarted
      },
      edited: true
    }));
  };


  render() {
    const { bookEntry } = this.state
    // const { handleSubmit } = this.props;
    // console.log(this.props)
    return (
      <React.Fragment>
        <h1 className="text-center">Book Form</h1>
        <form onSubmit={this.handleSubmit} className="m-2">
          <div className="form-group">
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              className="form-control"
              id="bookName"
              name="bookName"
              aria-describedby="emailHelp"
              placeholder="Book Name"
              value={bookEntry.bookName}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentPage">Current Pages</label>
            <input
              type="number"
              className="form-control"
              id="currentPage"
              name="currentPage"
              placeholder="Current Page of Book"
              value={bookEntry.currentPage}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="totalPages">Total Pages</label>
            <input
              type="number"
              className="form-control"
              id="totalPages"
              name="totalPages"
              placeholder="Total Pages of Book"
              value={bookEntry.totalPages}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateStarted">Date Started</label>
            <div>
              <DatePicker
                id="dateStarted"
                name="dateStarted"
                className="form-control"
                onChange={this.onChange}
                value={bookEntry.dateStarted}
                maxDate={new Date()}
              />
            </div>
          </div>

          <button type="button"
            className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(({ books }) => ({ books }), {
  createBookRequest
})(BookForm)