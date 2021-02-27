import React, { Component } from "react";
import ad from '../assets/images/speedlearn.png';

class Sidebar extends Component {
    render () {
        return (
            <div className="col-md-3">
                <div className="forum-title"></div>
                <div className="forum-sidebar">
                    <h5>محبوب ترین سوالات</h5>
                    <p><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</a></p>
                    <p><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</a></p>
                    <p><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</a></p>
                    <p><a href="#">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</a></p>
                </div>
                <div className="forum-sidebar">
                    <h5>حساب کاربری</h5>
                    <p><a href="#">ورود</a></p>
                </div>
                <div className="forum-ad-box">
                   <a target="_blank" href="https://speed-learn.ir"><img className="forum-ad" src={ad} alt="Speed Learn AD" /></a>
                </div>
                <div className="forum-sidebar">
                    <h5>مشکلی دارید؟</h5>
                    <h6>ارتباط با پشتیبانی در<a href="https://instagram.com/mathbot.ir" style={{color: "#fff"}}> اینستاگرام</a></h6>
                </div>
            </div>
        );
    }
}

export default Sidebar;