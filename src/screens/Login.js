import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import StatusMessage from "../components/StatusMessage"
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
          username: '',
          password: '',
        };
    }
    
    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        this.setState({[name]: value});
    };
    
    isFormValid = () => {
        const {username, password} = this.state;
    
        let isFormValid = true;
        if (!username || !password) {
          isFormValid = false;
        }
        return isFormValid;
    };
    
    handleSubmit = e => {
        if (this.isFormValid()) {
          this.props.handleLogin(this.state.username, this.state.password);
        }
    };

    render() {
        let {isLoading, error, showRegister} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Signing in'}
                type="modal"
            />
        );
        
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Login</title>
                </Helmet>

                <div className="section">
                    <div className="container-login">
                        <div className="login-page">
                            <div className="form">

                            {statusMessage}

                                <form className="login-form">

                                    <h4 style={{marginBottom: "25px"}}>ورود به حساب کاربری</h4>

                                    <input
                                        required
                                        type="text"
                                        label="Username"
                                        name="username"
                                        placeholder="نام کاربری"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />

                                    <input
                                        required
                                        type="password"
                                        label="Password"
                                        name="password"
                                        placeholder="پسورد"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />

                                    <button
                                        loading={isLoading}
                                        disabled={isLoading}
                                        onClick={this.handleSubmit}>
                                        ورود
                                    </button>

                                    <p className="message">هنوز ثبت نام نکرده اید؟ <Link to="/register" onClick={showRegister}>یک اکانت بسازید</Link></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Login;