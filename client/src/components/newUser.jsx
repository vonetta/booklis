import React from "react";
import { Formik, Form, Field } from "formik";
import { createUser } from "../api/users";
import * as Yup from "yup";

const NewUserForm = () => {
  const formSubmission = values => {
    createUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      dateRegistered: new Date()
    });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Your name is longer than that")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Your name is longer than that")
      .required("Last Name is Required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is Required"),
    password: Yup.string()
      .min(5, "Password has to be more than 5 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().test(
      "passwords-match",
      "Passwords must match",
      function(value) {
        return this.parent.password === value;
      }
    )
  });
  return (
    <>
      <div className="container  col-6 shadow-sm p-3 mb-5 bg-white rounded mt-5">
        <h1 className="text-center">Sign Up</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validationSchema}
          onSubmit={formSubmission}>
          {({ errors, touched, handleBlur }) => (
            <Form className="card-body">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <Field
                  className="form-control"
                  name="firstName"
                  aria-describedby="firstName"
                  placeholder="Enter First Name"
                  onBlur={handleBlur}
                />
                {errors.firstName && touched.firstName && (
                  <div className="alert alert-danger">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <Field
                  className="form-control"
                  name="lastName"
                  placeholder="Enter Last Name"
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName && (
                  <div className="alert alert-danger">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email Address"
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="alert alert-danger">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className="alert alert-danger">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="alert alert-danger">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default NewUserForm;
