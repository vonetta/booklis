import React, { Component } from "react";
// import ReduxThunk from 'redux-thunk'
import { Link } from "react-router-dom";
import { Line } from "rc-progress";
// import { getBooks, removeBook } from "../routes/books";
import "react-circular-progressbar/dist/styles.css";
import "../custom.css";
import { connect } from 'react-redux';
import rootSaga from '../sagas/saga'
class BookList extends Component {

  // handleDelete = book => {
  //   removeBook(book)
  //      .then(book => console.log(book))
  //     .then(getBooks)
  //     .then(results => results.data)
  //     .then(data => this.setState({ bookList: data }))
  //     .catch(err => console.log(err));
  // };

  handleEdit = book => {
    this.props.history.push({
      pathname: "/new-book",
      state: { book }
    });
  };
  render() {
    const { bookList } = this.props
    return (
      <React.Fragment>
        <h1>Book List</h1>
        <Link to="/new-book" className="btn btn-primary float-right">
          Add Book
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Total Pages</th>
              <th scope="col">Current Page</th>
              <th scope="col">Start Date</th>
              <th scope="col">Progress</th>
              <th scope="col">Completed</th>

              <th />
              <th />
            </tr>
          </thead>

          <tbody >
            {bookList.map((book, index) => (
              <tr key={book._id} >
                <th scope="row">{index + 1}</th>
                <td>{book.bookName}</td>
                <td>{book.totalPages}</td>
                <td>{book.currentPage}</td>
                <td>{book.dateStarted}</td>
                <td>
                  <Line
                    percent={(book.currentPage / book.totalPages) * 100}
                    strokeWidth="6"
                    strokeColor="#ff0000"
                    trailColor="#000000"
                  />
                </td>
                <td className="text-center">
                  {(book.currentPage / book.totalPages).toFixed(2) * 100} %
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.handleEdit(book)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(book)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(rootSaga())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
