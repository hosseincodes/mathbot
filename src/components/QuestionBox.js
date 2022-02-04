import React, { Component } from 'react';
import { Link } from "react-router-dom";
import profile from '../assets/images/hossein.png';

class QuestionBox extends Component {
    render () {
        return (
            <div className="col-md-12 col-xs-12 responsive-box">
                <div className="question-box-big">
                    <div className="forum-title-QuestionBox">
                        <h3>کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟</h3>
                        <div className="row question-box-big-details">
                            <Link className="username-answer" to="/users/ali">
                                <div className="col-md-4 col-sm-4 col-xs-4 forum-title-ask">
                                    <div className="account-user-img-box">
                                        <img src={profile} className="account-user-img-little" alt="Hossein Akbari" />
                                    </div>
                                    <h6>علی اکبری</h6>
                                </div>
                            </Link>
                            <div className="col-md-2 col-sm-4 col-xs-4 forum-title-view">
                                <h6>20 اردیبهشت 1399 - ساعت 18:20</h6>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-4 forum-title-last-seen">
                                <h6>3000 بازدید</h6>
                            </div>
                            <div className="col-md-4 col-xs-12"></div>
                        </div>
                    </div>
                    <p className="question-box-big-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                        ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                        قرار گیرد.
                    </p>
                    <div className="question-tag-box">
                        <p><span className="question-tag-span">انتگرال</span><span className="question-tag-span">جبر</span><span className="question-tag-span">هندسه</span><span className="question-tag-span">متوسطه اول</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionBox;