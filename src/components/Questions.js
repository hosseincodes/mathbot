import React, { Component } from "react";
import Sidebar from './Sidebar';
import Question from './Question';

class Questions extends Component {
    render () {
        return (
            <div className="section">
                <div className="container">
                    <div className="col-md-9">
                        <div className="forum-title">
                            <h3>پر بازدید ترین سوالات انجمن</h3>
                            <a className="title-a" href="https://mathbot.ir/forum">سوال خودت رو بپرس</a>
                         </div>

                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />

                        <div className="col-md-12 col-xs-12">
                            <a href="#">
                                <div className="more">نمایش سایر</div>
                            </a>
                        </div>
                    </div>

                   <Sidebar />

                </div>
            </div>
        );
    }
}

export default Questions;