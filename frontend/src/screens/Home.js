import React, { Component } from "react";
import Sidebar from '../components/Sidebar';
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

class Home extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>مث بات</title>
                    <meta name="keywords" content="مث بات , آموزش ریاضی"></meta>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-9 responsive-box">
                            <div className="forum-title">
                                <h3>جدید ترین سوالات</h3>
                                <a className="title-a" href="questions/ask/">سوال خودت رو بپرس</a>
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

                                            <div className="load">
                                                <div className="col-md-4"><Loader /></div>
                                            </div>

                                            <div className="more">
                                                <div className="col-md-8"><p>نمایش سایر</p></div>
                                            </div>
                                            
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Sidebar />

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Home;