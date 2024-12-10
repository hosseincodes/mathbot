import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "../components/Header.js";
import TheLostBoy from '../assets/images/lost.png';
import Footer from "../components/Footer.js";

class NotFoundPage extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>404</title>
                </Helmet>
            
                <div className="section">
                    <div className="not-found">
                        <div className="the-best-img-box">
                            <img src={TheLostBoy} className="the-lost-boy-img" alt="404" />
                        </div>
                        <h1>404 - صفحه مورد نظر شما یافت نشد</h1>
                        <Link className="not-found-btn" to ="/">صفحه اصلی</Link>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default NotFoundPage;