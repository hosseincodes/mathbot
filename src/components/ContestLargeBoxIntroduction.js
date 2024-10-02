import React from "react";
import testImg from '../testimg.png'

function ContestLargeBoxIntroduction() {

    return (
        <>
            <div className="col-md-12 col-xs-12 responsive-box">
                <div className="post-box">
                    
                    <div className="row">
                        <div className="col-md-2 col-xs-3">
                            <img src={testImg} className="contest-img"/>
                        </div>
                        <div className="col-md-8 col-xs-7">
                            <h5>مسابقه هفتگی مث بات دوره اول</h5>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                            <p>1532 شرکت کننده</p>
                            <p>
                                تاریخ برگزاری: ۳ مهر ۱۴۰۳ ساعت ۲۲:۳۰
                            </p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <button>ثبت نام</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );    
    
}

export default ContestLargeBoxIntroduction;