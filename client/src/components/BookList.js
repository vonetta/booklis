import React, { useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Line } from "rc-progress";
import { deleteBook } from "../api/books";
import { getUser } from "../utils/userStorage";
import { getBooks } from "../api/books";

const BookList = ({ history }) => {
  let [bookCollection, setBookCollection] = useState();

  useEffect(() => {
    async function retrieveBookList() {
      const currentUser = await getUser();
      if (currentUser !== undefined || currentUser !== null) {
        const getUserBooks = await getBooks(currentUser._id);
        setBookCollection(getUserBooks.data);
      } else {
        return <Redirect to="/login" />;
      }
    }
    retrieveBookList();
  }, []);

  const handleDelete = book => {
    deleteBook(book);
  };

  const handleEdit = book => {
    history.push({
      pathname: "/new-book",
      state: { book }
    });
  };

  return (
    <React.Fragment>
      <div className="mr-6 container bookList">
        <h1>Book List</h1>
        <Link to="/new-book" className="btn btn-primary float-right">
          Add Book
        </Link>

        {bookCollection && (
          <div className="bookItems">
            {bookCollection.reverse().map((book, index) => (
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
                    {Math.round((book.currentPage / book.totalPages) * 100)}%
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
