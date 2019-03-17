import React, { Component } from 'react';
class Login extends Component {
    state = {
        userName: '',
        password: ''
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
        e.preventDefault();
    }

    render() {
        const { userName, password } = this.state
        return (
            <React.Fragment>
                <div className="container">


                    <form onSubmit={this.handleSubmit} className="m-2">
                        <div className="form-group">
                            <label htmlFor="bookName">UserName/Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                aria-describedby="username"
                                placeholder="Username / Email"
                                value={userName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentPage">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;