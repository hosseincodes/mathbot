import React, { Component } from 'react';
import QuestionBox from '../components/QuestionBox';
import Response from '../components/Response';
import RichEditor from '../components/RichEditor';
import QuestionHeader from '../components/QuestionHeader';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Questions extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>نام سوال</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                
                        <QuestionHeader />
                
                        <QuestionBox />

                        <div className="forum-title">
                            <h3>3 پاسخ</h3>
                        </div>
                
                        <Response />
                        <Response />
                        <Response />

                        <div className="forum-title">
                            <h3>پاسخ شما</h3>
                        </div>
                
                        <div className="your-answer-box">
                            <RichEditor />
                            <input className="ask-input-button" type="button" value="ارسال پاسخ" />
                        </div>

                    </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Questions;