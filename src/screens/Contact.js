import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Contact extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>mathbot Contact</title>
                </Helmet>

                <div class="contact-section">
                    <div class="contact">

                        <h1 class="contact-h1">تماس با ما</h1>

                            <p class="contact-p">ارتباط با توسعه دهنده، تبادل نظرات و اشانایی با فعالیت های ما</p>
                        <div class="contact-div">
                            <a class="contact-a" href="mailto:hosseinakbari506@gmail.com "><i class="fas fa-envelope "></i></a>
                            <a class="contact-a" href="http://instagram.com/themathbot "><i class="fab fa-instagram "></i></a>
                            <a class="contact-a" href="http://t.me/math_20_bot_channel "><i class="fab fa-telegram "></i></a>
                        </div>

                            <p class="contact-p">اگر توانایی کمک به توسعه کد های سمت کاربری مث بات با React و Html و Css را دارید، در گیت هاب مشارکت کنید</p>
                        <div class="contact-div">
                            <a class="contact-a" href="http://github.com/hosseincodes/mathbot "><i class="fab fa-github "></i></a>
                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Contact;