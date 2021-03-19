import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import StatusMessage from "../components/StatusMessage";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          name: '',
          username: '',
          email: '',
          password: '',
          checked: true,
        };
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.value;
        this.setState({[name]: value});
    };
    
    handleCheckbox = () => {
        this.setState({checked: !this.state.checked});
    };
    
    isFormValid = () => {
        const {username, name, email, password, checked} = this.state;
    
        let isFormValid = true;
        if (!username || !name || !email || !password || !checked) {
          isFormValid = false;
        }
        return isFormValid;
    };
    
    handleSubmit = e => {
        if (this.isFormValid()) {
          let data = {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          };
          this.props.handleRegister(data);
        }
    };

    render() {
        let {isLoading, error, showLogin} = this.props;

        const statusMessage = (
            <StatusMessage
                error={error}
                errorMessage={error || 'Login Error'}
                loading={isLoading}
                loadingMessage={'Registering your account'}
                type="modal"
            />
        );

        return (
            <div>

                <Header />

                <Helmet>
                    <title>ثبت نام</title>
                </Helmet>

                <div className="section">
                    <div className="container-login">
                        <div className="login-page">
                            <div className="form">

                            {statusMessage}

                                <form className="register-form">

                                    <h4 style={{marginBottom: "25px"}}>ثبت نام در سایت</h4>

                                    <input
                                        required
                                        type="text"
                                        label="Name"
                                        name="name"
                                        placeholder="نام و نام خانوادگی"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />

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
                                        type="email"
                                        label="Email"
                                        name="email"
                                        placeholder="ایمیل"
                                        value={this.state.email}
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

                                    شرایط و قوانین را قبول دارم
                                    <input
                                        inline
                                        required
                                        type="checkbox"
                                        name="agreement"
                                        checked={this.state.checked}
                                        onChange={this.handleCheckbox}
                                    />

                                    <button
                                        loading={isLoading}
                                        disabled={isLoading}
                                        onClick={this.handleSubmit}>
                                        ثبت نام
                                    </button>

                                    <p className="message">قبلا ثبت نام کرده اید؟ <Link to="/login" onClick={showLogin}>وارد شوید</Link></p>
                                    
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Register;