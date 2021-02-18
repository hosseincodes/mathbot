import React, { Component } from "react";
import Sidebar from './Sidebar';
import Question from './Question';
import Loading from "./Loading";

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

                        <Loading />

                    </div>

                   <Sidebar />

                </div>
            </div>
        );
    }
}

export default Questions;