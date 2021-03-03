import React, { Component } from "react";
import { Link } from "react-router-dom";

class Response extends Component {
    render () {
        return (
            <div className="col-md-12 col-xs-12 responsive-box">
                <div className="question-answer-big">
                    <h6><Link className="username-answer" to="/users/hossein">حسین اکبری</Link> - 30 دقیقه پیش</h6>
                    <p className="question-answer-big-p">فکر کنم پاسخ صحیح عدد 20 هست، چون باید با اولویت پرانتز ها حساب کنیم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                    {/* <h6><a href="#">اشتراک گذاری</a> - <a href="#">گزارش</a></h6> */}
                </div>
            </div>
        );
    }
}

export default Response;