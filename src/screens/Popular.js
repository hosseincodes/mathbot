import React, { Component } from "react";
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

class Popular extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Popular</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="forum-title">
                                <h3>محبوب ترین سوالات پرسیده شده در مث بات</h3>
                            </div>

                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
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

export default Popular;