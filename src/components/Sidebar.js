import React, { Component } from "react";
import ad from '../assets/images/speedlearn.png';

class Sidebar extends Component {
    render () {
        return (
            <div className="col-md-3">
                <div className="forum-title"></div>
                <div className="forum-sidebar">
                    <h5>برچسب هایی که می بینید :</h5>
                    <h6>انتگرال - ریاضی نهم - ریاضی دهم - جبر - هندسه - مثلثات</h6>
                </div>
                <div className="forum-sidebar">
                    <h5>برچسب هایی که نمی بینید :</h5>
                    <h6>انتگرال - ریاضی نهم - ریاضی دهم - جبر - هندسه - مثلثات</h6>
                </div>
                <div className="forum-ad-box">
                   <a target="_blank" href="https://speed-learn.ir"><img className="forum-ad" src={ad} alt="Speed Learn AD" /></a>
                </div>
                <div className="forum-sidebar">
                    <h5>مشکلی دارید؟</h5>
                    <h6>ارتباط با پشتیبانی در<a href="instagram.com/mathbot.ir" style={{color: "#fff"}}> اینستاگرام</a></h6>
                </div>
            </div>
        );
    }
}

export default Sidebar;