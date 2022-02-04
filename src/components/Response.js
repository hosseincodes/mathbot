import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from '../assets/images/hossein.png';

class Response extends Component {
    render () {
        return (
            <div className="col-md-12 col-xs-12 responsive-box">
                <div className="question-answer-big">
                    <Link className="username-answer" to="/users/ali">
                        <div className="forum-title-ask">
                            <div className="account-user-img-box">
                                <img src={profile} className="account-user-img-little" alt="Hossein Akbari" />
                            </div>
                            <h6>علی اکبری</h6>
                        </div>
                    </Link>
                    <h6>&nbsp; 30 دقیقه پیش</h6>
                    <p className="question-answer-big-p">فکر کنم پاسخ صحیح عدد 20 هست، چون باید با اولویت پرانتز ها حساب کنیم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                    </p>
                </div>
            </div>
        );
    }
}

export default Response;