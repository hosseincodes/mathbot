import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Login extends Component {
    constructor (props){
        super(props);

        this.state = {
            expand: true
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>حساب کاربری</title>
                </Helmet>
                <div class="section">
                    <div class="container-login">
                        <div class="login-page">
                            <div class="form">

                                <div style={this.state.expand ? {display: 'none'} : { }}>
                                    <form class="register-form">
                                        <h4 style={{marginBottom: "25px"}}>ثبت نام در سایت</h4>
                                        <input type="text" placeholder="نام و نام خانوادگی" />
                                        <input type="text" placeholder="ایمیل" />
                                        <input type="password" placeholder="پسورد" />
                                        <button>ثبت نام</button>
                                        <p class="message">قبلا ثبت نام کرده اید؟ <span onClick={() => { this.setState ( {expand: true}) }}>وارد شوید</span></p>
                                    </form>
                                </div>

                                <div style={this.state.expand ? { } : {display: 'none'}}>
                                    <form class="login-form">
                                        <h4 style={{marginBottom: "25px"}}>ورود به حساب کاربری</h4>
                                        <input type="text" placeholder="نام کاربری یا ایمیل" />
                                        <input type="password" placeholder="پسورد" />
                                        <button>ورود</button>
                                        <p class="message">هنوز ثبت نام نکرده اید؟ <span onClick={() => { this.setState ( {expand: false}) }}>یک اکانت بسازید</span></p>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;