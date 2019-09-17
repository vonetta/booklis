import React from "react";
import { loginUser } from "../api/users";
import { withRouter } from "react-router-dom";
import { setInStorage } from "../utils/userStorage";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = props => {
  const formSubmission = async values => {
    try {
      loginUser({
        email: values.email,
        password: values.password
      })
        .then(token => setInStorage("booklist_app", { token: token.token }))
        .then(redirc => props.history.push("/books"));
    } catch (err) {
      console.error(err);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password is more than 5 characters")
      .required("Password is required")
  });

  return (
    <React.Fragment>
      <div className="container col-6 shadow-sm p-3 mb-5 bg-white rounded mt-5">
        <h1 className="text-center">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={formSubmission}>
          {({ errors, touched, handleBlur }) => (
            <Form className="m-2">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="email"
                  placeholder="Email"
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="alert alert-danger">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <div className="alert alert-danger">{errors.password}</div>
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

export default withRouter(Login);
