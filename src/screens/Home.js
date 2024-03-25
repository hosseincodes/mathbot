import React, { useState } from "react";
import QuestionMiniList from '../components/QuestionMiniList';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <title>Home / mathbot</title>
                <meta name="keywords" content="مث بات, mathbot"></meta>
            </Helmet>

            <div className="section">
                <div className="container">
                    <div className="col-md-12 responsive-box">
                        <div className="forum-title">
                            <h3 style={flag === true ? {} : {display: 'none'}}>جدید ترین سوالات</h3>
                            <h3 style={flag === true ? {display: 'none'} : {}}>صفحه دوم سوالات</h3>
                            <a className="title-a" href="questions/ask">طرح پرسش جدید</a>
                        </div>

                        
                        <QuestionMiniListDisplay/>
                        

                        <div className="col-md-12 col-xs-12">
                            <div className="row">
                                <p>
                                    <span style={flag === true ? {} : {display: 'none'}}>به دنبال بیشتر هستید؟ <a onClick={Secondpage}>صفحه دوم سوالات </a> را بگردید. </span>
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