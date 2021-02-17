import React, { Component } from "react";

class Question extends Component {
    render () {
        return (
                <div className="col-md-12 col-xs-12">
                    <div className="question-box">
                        <a className="question-box-link" href="#">
                            <h4>نام سوال</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ...</p>
                        </a>
                        <div className="row question-box-bottom">
                            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                                <p className="question-date">ثبت شده در 20 اردیبهشت 1399</p>
                            </div>
                            <div className="col-lg-6 col-nd-8 col-xs-12 col-sm-8">
                                <p className="question-tag">ریاضی هشتم - جبر - انتگرال - فاکتور - حسابان</p>
                            </div>
                            <div className="col-md-2">
                                <p className="question-visit">3000 بازدید</p>
                            </div>
                            <div className="col-md-1">
                                <p className="question-answer">3 پاسخ</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Question;