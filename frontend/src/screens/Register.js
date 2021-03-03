import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import StatusMessage from "../components/StatusMessage";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          name: '',
          email: '',
          password: '',
          checked: true,
        };
    }

    handleChange = (e, {name, value}) => {
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

                <div class="section">
                    <div class="container-login">
                        <div class="login-page">
                            <div class="form">

                                <form class="register-form">
                                    <h4 style={{marginBottom: "25px"}}>ثبت نام در سایت</h4>
                                    <input type="text" placeholder="نام و نام خانوادگی" />
                                    <input type="text" placeholder="ایمیل" />
                                    <input type="password" placeholder="پسورد" />
                                    <button>ثبت نام</button>
                                    <p class="message">قبلا ثبت نام کرده اید؟ <Link to="/login">وارد شوید</Link></p>
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