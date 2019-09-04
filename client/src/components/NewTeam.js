import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { createTeam } from "../api/teams";

const NewTeam = () => {
  const formSubmission = values => {
    console.log(values);
    // createTeam({
    //   teamName: values.teamName,
    //   members: [{ playerName: values.playerName, email: values.email }]
    // });
  };

  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("Please Enter a Team Name"),
    members: [
      {
        playerName: Yup.string().required(
          "Please Enter your new team members name"
        ),
        email: Yup.string().required("Please Enter your team members email")
      }
    ]
  });

  const clonePlayerInfo = () => {};

  return (
    <div className="container mt-5 shadow-sm p-3 mb-5 bg-white rounded">
      <h1 className="text-center">New Team</h1>
      <Formik
        initialValues={{
          teamName: "",
          members: { playerName: "", email: "" }
        }}
        validationSchema={validationSchema}
        onSubmit={formSubmission}
        handleReset>
        {({ values, errors, touched }) => (
          <Form className="m-2 card-body">
            <div className="form-group">
              <label>Team Name</label>
              <Field
                type="text"
                className="form-control"
                name="teamName"
                aria-describedby="team name"
                placeholder="Enter Team Name"
                value={values.teamName}
              />
              {errors.teamName && touched.teamName && (
                <div className="alert alert-danger">{errors.teamName}</div>
              )}
            </div>
            <section className="player-list">
              <i className="fas fa-plus" onClick={clonePlayerInfo}>
                Add Player
              </i>
              <section className="player-info">
                <div className="form-group name">
                  <label htmlFor="">Full Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="members.playerName"
                    aria-describedby="fullName"
                    placeholder="Enter Player Name"
                    value={values.members.playerName}
                  />
                  {errors.playerName &&
                    touched.playerName(
                      <div className="alert alert-danger">
                        {errors.playerName}
                      </div>
                    )}
                </div>
                <div className="form-group email">
                  <label htmlFor="">Email</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="members.email"
                    aria-describedby="playerEmail"
                    placeholder="Enter Player Email"
                    value={values.members.email}
                  />
                  {errors.email &&
                    touched.email(
                      <div className="alert alert-danger">{errors.email}</div>
                    )}
                  <hr />
                </div>
              </section>
            </section>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewTeam;
