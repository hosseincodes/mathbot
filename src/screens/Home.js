import React, { Component } from "react";
import Sidebar from '../components/Sidebar';
import QuestionMiniList from '../components/QuestionMiniList';
import Loading from "../components/Loading";

class Home extends Component {
    render () {
        return (
            <div className="section">
                <div className="container">
                    <div className="col-md-9">
                        <div className="forum-title">
                            <h3>پر بازدید ترین سوالات انجمن</h3>
                            <a className="title-a" href="https://mathbot.ir/forum">سوال خودت رو بپرس</a>
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
        );
    }
}

export default Home;