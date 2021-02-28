import React, { Component } from "react";
import { Helmet } from 'react-helmet';

class Contact extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>تماس با ما</title>
                </Helmet>
                <div class="section">
                    <div class="contact">
                        <h1 class="contact-h1">تماس با ما</h1>
                        <p class="contact-p">مث بات هنوز در ابتدای کار است و ما به شدت به نظرات و انتقادات شما نسبت به این وب سایت نیازمنیدم.</p>
                    <div class="contact-div">
                        <a class="contact-a" href="mailto:hosseinakbari506@gmail.com "><i class="fas fa-envelope "></i></a>
                        <a class="contact-a" href="tel:+989156179233"><i class="fas fa-phone "></i></a>
                        <a class="contact-a" href="t.me/ho0o0o3ein"><i class="fab fa-telegram-plane"></i></a>
                    </div>
                        <p class="contact-p">مث بات اپن سورس است و اگر توانایی کمک به توسعه آن را دارید، در گیت هاب با ما همراه باشید.</p>
                    <div class="contact-div">
                        <a class="contact-a" href="http://github.com/hosseincodes/mathbot "><i class="fab fa-github "></i></a>
                    </div>
                        <p class="contact-p">درشبکه های اجتماعی</p>
                    <div class="contact-div">
                    <a class="contact-a" href="http://instagram.com/mathbot.ir "><i class="fab fa-instagram "></i></a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;