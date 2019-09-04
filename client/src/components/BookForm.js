import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createBook, updateBook } from "../api/books";

const BookForm = props => {
  const [editForm, setEditForm] = useState(
    props.history.location.state !== undefined
      ? props.history.location.state.book
      : ""
  );
  const [dateStarted, setDateStarted] = useState();

  const formSubmission = values => {
    if (editForm) {
      updateBook(values);
    } else {
      if (values.currentPage > values.totalPages) {
        return;
      } else {
        createBook({
          bookName: values.bookName,
          totalPages: values.totalPages,
          currentPage: values.currentPage,
          dateStarted: values.dataStarted
        });
      }
    }
  };

  const FormikDatePicker = ({ name, value }) => {
    return (
      <DatePicker
        id="dateStarted"
        name="dateStarted"
        className="form-control"
        onChange={onChange}
        maxDate={new Date()}
      />
    );
  };

  const validationSchema = Yup.object().shape({
    bookName: Yup.string().required("Please Enter a Book Name"),
    currentPage: Yup.string().required(
      "Please Enter the page number you are currently on"
    ),
    totalPages: Yup.string().required(
      "Please Enter total amount of pages the book has"
    )
  });

  const onChange = date => {
    setDateStarted(date);
  };

  return (
    <React.Fragment>
      <div className="container mt-5 shadow-sm p-3 mb-5 bg-white rounded">
        <h1 className="text-center mt-3">
          {editForm ? `Edit ${editForm.bookName}` : "New Book Entry"}
        </h1>
        <Formik
          initialValues={{
            _id: editForm !== undefined ? editForm._id : "",
            bookName: editForm !== undefined ? editForm.bookName : "",
            totalPages: editForm !== undefined ? editForm.totalPages : "",
            currentPage: editForm !== undefined ? editForm.currentPage : "",
            dateStarted:
              editForm !== undefined ? editForm.dateStarted : "disabled"
          }}
          validationSchema={validationSchema}
          onSubmit={formSubmission}>
          {({ values, errors, touched, handleBlur }) => (
            <Form className="m-2 card-body">
              <div className="form-group">
                <label htmlFor="bookName">Book Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="bookName"
                  aria-describedby="emailHelp"
                  placeholder="Book Name"
                  value={values.bookName}
                />
                {errors.bookName && touched.bookName && (
                  <div className="alert alert-danger">{errors.bookName}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="currentPage">Current Pages</label>
                <Field
                  type="number"
                  className="form-control"
                  name="currentPage"
                  placeholder="Current Page of Book"
                />
                {errors.currentPage && touched.currentPage && (
                  <div className="alert alert-danger">{errors.currentPage}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="totalPages">Total Pages</label>
                <Field
                  type="number"
                  className="form-control"
                  name="totalPages"
                  placeholder="Total Pages of Book"
                />
                {errors.totalPages && touched.totalPages && (
                  <div className="alert alert-danger">{errors.totalPages}</div>
                )}
              </div>
              <div className="form-group">
                {editForm ? (
                  <>
                    <label htmlFor="dateStarted">Date Edited</label>
                    {/* <Field component={FormikDatePicker} /> */}
                    <Field
                      className="form-control"
                      value={new Date().toLocaleDateString().substr(0, 10)}
                      disabled
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <label htmlFor="dateStarted">Date Started</label>
                    <Field component={FormikDatePicker} />
                  </>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default BookForm;
