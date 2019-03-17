import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createUserRequest } from '../actions/users'
class NewUserForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        verified: false
    }

    handleChange = ({ target }) => {
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            ...prevState.state,
            [name]: value
        }));
    };

    handleSubmit = (e) => {
        console.log('submit')
        this.props.createUserRequest({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            verified: this.state.verified,
        })
    }

    render() {
        const { firstName, lastName, email, password, confirmPassword } = this.state
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center">Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                aria-describedby="firstName"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="confirmPassword"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button type="button"
                            className="btn btn-primary" onClick={this.handleSubmit}>
                            Submit
          </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(({ users }) => ({ users }), {
    createUserRequest
})(NewUserForm);