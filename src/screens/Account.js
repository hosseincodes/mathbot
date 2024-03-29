import React, { Component } from 'react';
import profile from '../assets/images/hossein.png';
import { Helmet } from 'react-helmet';
import RichEditor from '../components/RichEditor';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Account extends Component {
    constructor (props){
        super(props);

        this.state = {
            expand: false
        }
    }
    
    render() {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Account</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="row account">
                            <div className="col-md-3">
                                <div className="account-sidebar">
                                    <div className="account-user-img-box-large">
                                        <img src={profile} className="account-user-img" alt="Hossein Akbari" />
                                    </div>
                                    <p style={{textAlign: "center", padding: "15px 0px 0px 0px"}}>حسین اکبری</p>
                                    
                                </div>

                                <div onClick={() => { this.setState ( {expand: false}) }} className="account-sidebar-links"><span style={this.state.expand ? { } : {background: "#29a58d", color: "#fff", transition: "all 0.2s ease"}}>پروفایل من</span></div>
                                <div onClick={() => { this.setState ( {expand: true}) }} className="account-sidebar-links"><span style={this.state.expand ? {background: "#29a58d", color: "#fff", transition: "all 0.2s ease"} : { }}>ادیت پروفایل و تنظمیات</span></div>
                                <div className="account-sidebar-links"><span>خروج از حساب کاربری</span></div>

                            </div>
                            <div className="col-md-9">
                                <div className="account-section">
                                    <div style={this.state.expand ? {display: 'none'} : { }}>
                                        <h4 style={{fontWeight: "900"}}>حسین اکبری</h4>
                                        <p>توسعه دهنده نرم افزار های تحت وب</p>
                                        <p style={{lineHeight: "30px"}}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        </p>
                                        <div className="score">
                                            <span>امتیاز </span><span style={{fontSize: "30px"}}>42</span>
                                            <div style={{textAlign: "left"}}><span>آخرین امتیاز : </span><Link to="/questions/لورم-ایپسوم-متن-ساختگی"><span>انتگرال چیست؟</span></Link></div>
                                        </div>
                                        <div className="activity">
                                            <h5 className="h5-mini-profile">پاسخ های داده شده</h5>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">جبر چیست؟</Link></p>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">چطور این فرمول را حساب کنم</Link></p>
                                            <h5 className="h5-mini-profile">سوالات ثبت شده</h5>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">بهترین روش برای حل مسئله های توان دار</Link></p>
                                                <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">در این مسئله مثلثات مشکل دارم و فرمول هم نیاز دارم</Link></p>
                                        </div>
                                    </div>
                                    <div style={this.state.expand ? { } : {display: 'none'}}>
                                        <div className="edit-profile-box">
                                            <span>نام و نام خانوادگی : </span><input className="edit-profile-box-input" type="text" value="حسین اکبری" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>عنوان (زمینه فعالیت) : </span><input className="edit-profile-box-input" type="text" value="توسعه دهنده نرم افزار های تحت وب" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>نام کاربری : </span><input className="edit-profile-box-input" type="text" value="hosseinakbari" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>ایمیل : </span><input className="edit-profile-box-input" type="text" value="hosseinakbari506@gmail.com" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>درباره من : </span><RichEditor />
                                        </div>
                                        <hr />
                                        <div className="edit-profile-box">
                                            <span>دارک مود : </span><span> فعال </span><input type="radio" name="darkMode" /><span> غیرفعال </span><input type="radio" name="darkMode" defaultChecked />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>ارسال اخبار به ایمیل : </span><span> فعال </span><input type="radio" name="emailNews" defaultChecked /><span> غیرفعال </span><input type="radio" name="emailNews" />
                                        </div>
                                        <div className="edit-profile-box">
                                            <span>پروفایل خصوصی : </span><span> فعال </span><input type="radio" name="privateProfile" /><span> غیرفعال </span><input type="radio" name="privateProfile" defaultChecked />
                                        </div>
                                        <button className="save-profile-box">ذخیره تغییرات</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Account;