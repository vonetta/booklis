import React, { Component } from "react";
// import { createNewBook, editBook } from "../routes/books";
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import rootSaga from '../sagas/saga'
// import * as actionCreator from '../store/actions/action'
class BookForm extends Component {
  // state = {
  //   bookEntry: {
  //     bookName: "",
  //     totalPages: "",
  //     currentPage: "",
  //     dateStarted: ""
  //   },
  //   errors: {},
  //   edited: false
  // };

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      return this.handleEdit(this.props.location.state.book);
    }
  }
  // handleChange = ({ target }) => {
  //   const value = target.value;
  //   const name = target.name;
  //   this.props(prevState => ({
  //     bookEntry: {
  //       ...prevState.bookEntry,
  //       [name]: value
  //     }
  //   }));
  // };

  // onChange = date => {

  //   this.setState(prevState => ({
  //     bookEntry: {
  //       ...prevState.bookEntry,
  //       dateStarted: date
  //     }
  //   }));
  // }

  // handleSubmit = (e, bookData) => {
  //   e.preventDefault();
  //   console.log(bookData, "submit button");
  //   if (this.state.edited) {
  //     editBook(this.state.bookEntry);
  //   } else {
  //     createNewBook(this.state.bookEntry);
  //   }
  //   window.location = "/";
  // };

  // handleEdit = bookData => {
  //   this.setState(prevState => ({
  //     bookEntry: {
  //       ...prevState.bookEntry,
  //       _id: bookData._id,
  //       bookName: bookData.bookName,
  //       totalPages: bookData.totalPages,
  //       currentPage: bookData.currentPage,
  //       dateStarted: bookData.dateStarted
  //     },
  //     edited: true
  //   }));
  // };


  render() {

    const { bookEntry, handleChange, handleSubmit, onChange } = this.props;
    return (
      <React.Fragment>
        <h1 className="text-center">Book Form</h1>
        <form onSubmit={handleSubmit} className="m-2">
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateStarted">Date Started</label>
            <div>
              <DatePicker
                id="dateStarted"
                name="dateStarted"
                className="form-control"
                onChange={onChange}
                value={bookEntry.dateStarted}
                maxDate={new Date()}
              />
            </div>
          </div>

          <button type="button"
            className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    bookEntry: {
      bookName: state.bookName,
      totalPages: state.totalPages,
      currentPage: state.currentPage,
      dateStarted: state.dateStarted
    },
    errors: state.errors,
    edited: state.edited
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (bookData) => dispatch(rootSaga.submitForm(bookData)),
    handleChange: (e) => dispatch(rootSaga.inputChange(e)),
    onChange: (date) => dispatch(rootSaga.dateChange(date)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
