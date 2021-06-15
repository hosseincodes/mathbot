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
                                <h3><i style={{color: "red"}} class="fas fa-fire-alt"></i> محبوب ترین سوالات پرسیده شده در مث بات</h3>
                            </div>

                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />
                            <QuestionMiniList />

                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Popular;