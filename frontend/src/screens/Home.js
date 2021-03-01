import React, { Component } from "react";
import Sidebar from '../components/Sidebar';
import QuestionMiniList from '../components/QuestionMiniList';
import Loading from "../components/Loading";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                        <div className="col-md-9">
                            <div className="forum-title">
                                <h3>جدید ترین سوالات انجمن</h3>
                                <a className="title-a" href="questions/ask/">سوال خودت رو بپرس</a>
                            </div>

                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />

                            <Loading />

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