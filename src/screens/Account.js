import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostMiniProfile from "../components/PostMiniProfile";
import CommentMiniProfile from "../components/CommentMiniProfile";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from "../components/Loader";
import IsAuthenticated from "../utils/IsAuthenticated";
import config from '../utils/config';

function Account() {

    const [expand, setexpand] = useState(false)
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [EditImage, setEditImage] = useState(false)
    const [EditPassword, setEditPassword] = useState(false)
    const [image, setImage] = useState(null)
    const [newdata, setnewdata] = useState({
        email: '',
        current_password: '',
        new_password: '',
        avatar: '',
        name: '',
        bio: '',
      })
    const [loader, setloader] = useState(false)


    useEffect(() => {
        if (IsAuthenticated() !== "Not Authenticated") {
            axios.get("https://server.mathbot.ir/api/accounts/" + IsAuthenticated()).then((res) => {
                setdata(res.data)
                setImage(res.data.avatar)
                setIsLoading(false)
            })
        }
    }, [])

    const handleChange = (e) => {
        setnewdata({
            ...newdata,
            [e.target.name]: e.target.value
        });
    };

    const handleFileSelect = (event) => {
        setnewdata({...newdata, avatar: event.target.files[0]})
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
      
    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        setloader(true);

        e.preventDefault();
        
        let form_data = new FormData();
        form_data.append("avatar", newdata.avatar);
        form_data.append("email", newdata.email);
        form_data.append("bio", newdata.bio);
        form_data.append("name", newdata.name);
        form_data.append("current_password", newdata.current_password);
        form_data.append("new_password", newdata.new_password);
        
        const TokenConfig = config();

        try {
          const response = await TokenConfig.put(`/accounts/${data.username}/edit/`, form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }});
          console.log(response)
          setloader(false)
          alert("تغییرات با موفقیت اعمال شد");
          window.location.reload();
        } catch (error) {
          setloader(false)
          console.error("Error:", error.response.data);
          alert("نشد! یه مشکلی وجود داره")
        }
    };

    function SendPostsLink(){
        const fetchedData = []
        for (const link of data.posts){
            fetchedData.unshift(<PostMiniProfile data={link} />)
        }

        if (fetchedData.length === 0) {
            return (
                <div>
                    <p>هنوز هیچ سوالی ثبت نکرده اید</p>
                </div>
            )
        } else {
            return fetchedData
        }
    }

    function SendCommentsLink(){
        const fetchedData = []
        for (const link of data.comments){
            fetchedData.unshift(<CommentMiniProfile data={link} />)
        }

        if (fetchedData.length === 0) {
            return (
                <div>
                    <p>هنوز هیچ پاسخی ثبت نکرده اید</p>
                </div>
            )
        } else {
            return fetchedData
        }
    }

    if (IsAuthenticated() === "Not Authenticated") {
        window.location.replace("/login");
    } else {
        if (isLoading) {
            return <Loader />;
        } else {
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
                                            <img src={data.avatar} className="account-user-img" alt={data.name} />
                                        </div>
                                        <p style={{color: "#fff", textAlign: "center", padding: "15px 0px 0px 0px"}}>{data.name}</p>
                                        <Link to={`/users/${data.username}`}>
                                            <div className="profile-view">
                                                <p>مشاهده پروفایل</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="account-sidebar-links"><span onClick={() => { setexpand(false) }} style={expand ? { } : {background: "#29a58d", color: "#fff"}}>داشبورد</span></div>
                                    <div className="account-sidebar-links"><span onClick={() => { setexpand(true) }} style={expand ? {background: "#29a58d", color: "#fff"} : { }}>ادیت پروفایل و تنظمیات</span></div>
                                    <div className="account-sidebar-links">
                                        <span 
                                            onClick={() => {
                                                localStorage.setItem('token', "LOGGEDOUT");
                                                window.location.replace("/");
                                            }}
                                        >خروج از حساب کاربری
                                        </span>
                                    </div>

                                </div>
                                <div className="col-md-9">
                                    <div className="account-section">
                                        <div style={expand ? {display: 'none'} : { }}>
                                            <h4 style={{fontWeight: "900"}}>{data.name}</h4>
                                            <Link style={{left: "20px"}} className="title-a not-display-in-mobile" to="questions/ask">
                                                <h6>طرح پرسش جدید</h6>
                                            </Link>
                                            <p>{data.bio}</p>
                                            <div className="activity">
                                                <h5 className="h5-mini-profile">سوال های من</h5>
                                                    {SendPostsLink()}
                                                <h5 className="h5-mini-profile">پاسخ های من</h5>
                                                    {SendCommentsLink()}
                                            </div>
                                        </div>
                                        <div style={expand ? { } : {display: 'none'}}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="edit-profile-box">
                                                    <span>تصویر پروفایل : </span>
                                                    <span onClick={() => { setEditImage(true) }}>
                                                        <i style={{color: "#29a58d", cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i>
                                                    </span>
                                                    <div style={EditImage ? {} : {display: 'none'}} className='edit-box'>
                                                        <input name="avatar" type="file" onChange={handleFileSelect} />
                                                    </div>
                                                    <div className="account-user-img-box-large change-img">
                                                        <img src={image} className="account-user-img-small" alt={data.name}/>
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>نام و نام خانوادگی :</span><br />
                                                    <input placeholder={data.name} name="name" onChange={handleChange} className="edit-profile-box-input" type="text" />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>بایو :</span><br />
                                                    <textarea placeholder={data.bio} name="bio" onChange={handleChange} className="edit-profile-box-input" type="text" />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>ایمیل :</span><br />
                                                    <input placeholder={data.email} name="email" onChange={handleChange} className="edit-profile-box-input" type="text"/>
                                                </div>
                                                <div className="edit-profile-box change-pass-big-box">
                                                    <span className='change-pass-button' onClick={() => { setEditPassword(true) }}><i style={{color: "#29a58d"}} className="fa-solid fa-pen-to-square"></i> تغییر پسورد</span>
                                                    <div style={EditPassword ? {} : {display: 'none'}} className='edit-box change-pass-box'>
                                                        <span>پسورد جدید: </span><br />
                                                        <input name="new_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>* پسورد فعلی : </span><input required name="current_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
                                                </div>
                                                <button className="save-profile-box" type="submit">ذخیره تغییرات</button>
                                                {loader ? (
                                                    <div className='uploading-loader-box'>
                                                        <p>در حال اپلود کمی صبر کنید ...</p>
                                                    </div>
                                                ) : (<></>)}
                                            </form>
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
}

export default Account;