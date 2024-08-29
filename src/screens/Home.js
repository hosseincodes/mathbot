import React from "react";
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {

    return (
        <div>

            <Header />

            <Helmet>
                <title>mathbot</title>
                <meta name="keywords" content="مث بات, mathbot"></meta>
            </Helmet>

            <div className="section">
                <div className="container">

                    <div className="col-md-3 responsive-box">
                        <Sidebar />
                    </div>

                    <div className="col-md-9 responsive-box">
                        
                        <QuestionMiniList/>

                        <div className="col-md-12 col-xs-12">
                            <div className="row">
                                <p>
                                    <span>به دنبال بیشتر هستید؟ <span className="page2">به زودی </span></span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Home;