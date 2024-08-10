import React, { useState } from "react";
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Home() {

    const [flag, setFlag] = useState(true);

    const Secondpage = () => {
        return setFlag(false)
    }

    function QuestionMiniListDisplay() {
        if (flag === true) {
            return <QuestionMiniList id = {1} />
        } else {
            return <QuestionMiniList id = {2} />
        }
    }

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
                        
                        <QuestionMiniListDisplay/>

                        <div className="col-md-12 col-xs-12">
                            <div className="row">
                                <p>
                                    <span style={flag === true ? {} : {display: 'none'}}>به دنبال بیشتر هستید؟ <span className="page2" onClick={Secondpage}>صفحه دوم سوالات </span> را بگردید. </span>
                                    ما را در پاسخ به سوالات بی پاسخ یاری کنید.</p>
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