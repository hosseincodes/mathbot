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
    
    handleChange = (e, {name, value}) => {
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
                    <title>ورود</title>
                </Helmet>

                <div class="section">
                    <div class="container-login">
                        <div class="login-page">
                            <div class="form">

                                <form class="login-form">
                                    <h4 style={{marginBottom: "25px"}}>ورود به حساب کاربری</h4>
                                    <input type="text" placeholder="نام کاربری یا ایمیل" />
                                    <input type="password" placeholder="پسورد" />
                                    <button>ورود</button>
                                    <p class="message">هنوز ثبت نام نکرده اید؟ <Link to="/register">یک اکانت بسازید</Link></p>
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