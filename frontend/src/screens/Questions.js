import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import QuestionBox from '../components/QuestionBox';
import Response from '../components/Response';
import Editor from '../components/Editor';
import QuestionHeader from '../components/QuestionHeader';

class Questions extends Component {
    render () {
        return (
            <div className="section">
                <div className="container">
                    <div className="col-md-9">
                
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
                        <Editor />
                        <input className="ask-input-button" type="button" value="ارسال پاسخ" />
                    </div>

                </div>

                <Sidebar />

            </div>
        </div>
        );
    }
}

export default Questions;