import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

class About extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>درباره ما</title>
                </Helmet>

                <div className="about-us-section">
                    <div className="about">
                        <h1 className="about-title">درباره ما</h1>
                            <p className="about-description-for-each-person">اگر توانایی کمک به توسعه کد های سمت کاربری مث بات با React و Html و Css را دارید، در گیت هاب مشارکت کنید</p>
                            <div className="about-social-media-box">
                                <a className="about-links" href="http://github.com/hosseincodes/mathbot "><i className="fab fa-github "></i></a>
                            </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default About;