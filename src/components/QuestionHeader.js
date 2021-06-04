import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionHeader extends Component {
    render () {
        return (
            <div className="forum-title">
                <h3>کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟</h3>
                <div className="row">
                    <div className="col-md-2 col-sm-4 col-xs-4 forum-title-ask">
                        <h6><Link className="username-answer" to="/users/ali">علی اکبری</Link></h6>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 forum-title-view">
                        <h6>20 اردیبهشت 1399</h6>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-4 forum-title-last-seen">
                        <h6>3000 بازدید</h6>
                    </div>
                    <div className="col-md-6 col-xs-12"></div>
                </div>
            </div>
        );
    }
}

export default QuestionHeader