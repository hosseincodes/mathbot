import React, { Component } from "react";
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Loader from "../components/Loader";

class Home extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Home / mathbot</title>
                    <meta name="keywords" content="مث بات, mathbot"></meta>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="forum-title">
                                <h3>جدید ترین سوالات</h3>
                                <a className="title-a" href="questions/ask/">طرح پرسش جدید</a>
                            </div>

                            <QuestionMiniList />

                            <div className="col-md-12 col-xs-12">
                                <div className="loader-box">
                                    <div className="row">
                                        <a href="https://test.com">

                                            <div className="more">

                                                {/* This loader should only be displayed when a real loading occurs. This format will be added in the future */}

                                                    {/* <Loader /> */}

                                                <p>نمایش سایر</p>
                                                
                                            </div>
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;