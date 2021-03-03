import React, { Component } from "react";
import profile from '../assets/images/hossein.png';
import { Link } from "react-router-dom";

class Sidebar extends Component {
    constructor (props){
        super(props);

        this.state = {
            login: false
        }
    }

    render () {
        return (
            <div className="col-md-3 responsive-box">
                <div className="forum-title"></div>
                <div className="forum-sidebar">
                    <h5>محبوب ترین سوالات</h5>
                    <p>
                        <Link to="/questions/لورم-ایپسوم-متن-ساختگی">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </Link>
                    </p>
                    <p>
                        <Link to="/questions/لورم-ایپسوم-متن-ساختگی">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </Link>
                    </p>
                    <p>
                        <Link to="/questions/لورم-ایپسوم-متن-ساختگی">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </Link>
                    </p>
                    <p>
                        <Link to="/questions/لورم-ایپسوم-متن-ساختگی">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </Link>
                    </p>
                </div>
                <div className="forum-sidebar">
                    <div style={this.state.login ? {display: 'none'} : { }}>
                        <h5>حساب کاربری</h5>
                        <Link to="/login">
                            <p>ورود</p>
                        </Link>
                    </div>
                    <div style={this.state.login ? { } : { display: 'none' }}>
                       <Link to="/account">
                            <div className="row">
                                <div className="col-md-5"><img src={profile} className="account-user-img-sidebar" alt="Hossein Akbari" /></div>
                                <div className="col-md-5"><span className="account-sidebar-name">حسین اکبری</span></div>
                                <div className="col-md-2"></div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Location of ads in the sidebar */}

                {/* <div className="forum-ad-box">
                   <a target="_blank" href="#"><img className="forum-ad" src={#} /></a>
                </div> */}

                <div className="forum-sidebar">
                    <h5>مشکلی دارید؟</h5>
                    <h6>ارتباط با پشتیبانی در<a href="https://instagram.com/mathbot.ir" style={{color: "#fff"}}> اینستاگرام</a></h6>
                </div>
            </div>
        );
    }
}

export default Sidebar;