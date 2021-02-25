import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div class="section">
                <div class="container-login">
                    <div class="login-page">
                        <div class="form">
                            <form class="register-form">
                                <input type="text" placeholder="نام و نام خانوادگی" />
                                <input type="text" placeholder="ایمیل" />
                                <input type="password" placeholder="پسورد" />
                                <button>ثبت نام</button>
                                <p class="message">قبلا ثبت نام کرده اید؟ <a href="#">وارد شوید</a></p>
                            </form>
                            <form class="login-form">
                            <input type="text" placeholder="نام کاربری یا ایمیل" />
                            <input type="password" placeholder="پسورد" />
                            <button>ورود</button>
                            <p class="message">هنوز ثبت نام نکرده اید؟ <a href="#">یک اکانت بسازید</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;