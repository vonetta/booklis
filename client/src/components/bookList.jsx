import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Line } from "rc-progress";
import "react-circular-progressbar/dist/styles.css";
import { toast } from "react-toastify";
import { deleteBook } from "../api/books";

const BookList = ({ bookList, history }) => {
  const handleDelete = book => {
    deleteBook(book);
    toast.success("Book has been deleted");
  };

  const handleEdit = book => {
    history.push({
      pathname: "/new-book",
      state: { book }
    });
  };

  return (
    <React.Fragment>
      <div className="mr-6 bookList">
        <h1>Book List</h1>
        <Link to="/new-book" className="btn btn-primary float-right">
          Add Book
        </Link>

        {bookList && (
          <div className="bookItems">
            {bookList.reverse().map((book, index) => (
              <div className="card" key={index}>
                <div className="card-body">
                  <h4 className="card-title">
                    {index + 1}) {book.bookName}
                  </h4>
                  <p className="card-text">
                    Date Started: {book.dateStarted.substr(0, 10)}
                  </p>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Total Pages: {book.totalPages}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Current Page: {book.currentPage}
                  </h6>
                  <hr />
                  <p className="card-text">
                    <Line
                      percent={(book.currentPage / book.totalPages) * 100}
                      strokeWidth="2"
                      strokeColor="#ff0000"
                      trailColor="#000000"
                    />
                    {(book.currentPage / book.totalPages).toFixed(2) * 100}%
                    Completed
                  </p>

                  <button
                    href="#"
                    className="card-link btn btn-warning"
                    onClick={() => handleEdit(book)}>
                    Edit
                  </button>
                  <button
                    href="#"
                    className="card-link btn btn-danger"
                    onClick={() => handleDelete(book)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default withRouter(BookList);
