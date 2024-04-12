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

                <div className="contact-section">
                    <div className="contact">

                        <h1 className="contact-h1">تماس با ما</h1>

                            <p className="contact-p">ارتباط با توسعه دهنده، تبادل نظرات و اشانایی با فعالیت های ما</p>
                        <div className="contact-div">
                            <a className="contact-a" href="mailto:hosseinakbari506@gmail.com "><i className="fas fa-envelope "></i></a>
                            <a className="contact-a" href="http://instagram.com/themathbot "><i className="fab fa-instagram "></i></a>
                            <a className="contact-a" href="http://t.me/math_20_bot_channel "><i className="fab fa-telegram "></i></a>
                        </div>

                            <p className="contact-p">اگر توانایی کمک به توسعه کد های سمت کاربری مث بات با React و Html و Css را دارید، در گیت هاب مشارکت کنید</p>
                        <div className="contact-div">
                            <a className="contact-a" href="http://github.com/hosseincodes/mathbot "><i className="fab fa-github "></i></a>
                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Contact;