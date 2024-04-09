import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile.png';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostMiniProfile from "../components/CommentMiniProfile";
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Loader from "../components/Loader";

function Account() {

    const [expand, setexpand] = useState(false)
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [newdata, setnewdata] = useState({
        email: '',
        currnet_password: '',
        new_password: '',
        name: '',
        bio: '',
      })

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token != null) {
            var decodedToken = jwtDecode(token);
            axios.get("https://server.mathbot.ir/api/accounts/" + decodedToken.username).then((res) => {
                setdata(res.data)
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

    const postobject = axios.create({
        baseURL: "https://server.mathbot.ir/api"
    })
  
    postobject.interceptors.request.use(
        (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
        },
        (error) => Promise.reject(error)
    );
  
    postobject.interceptors.response.use(
        (response) => response,
        async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
    
            try {
            const refreshToken = localStorage.getItem('refreshToken');
            const response = await axios.post('https://server.mathbot.ir/api/token/refresh/', {refresh: refreshToken} );
            const { access } = response.data;
            
            localStorage.setItem('token', access);
    
            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${access}`;
            return axios(originalRequest);
            } catch (error) {
            // Handle refresh token error or redirect to login
            }
        }
    
        return Promise.reject(error);
        }
    );
      
    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await postobject.put(`/accounts/${data.username}/edit/`, newdata);
          alert("تغییرات با موفقیت اعمال شد");
          window.location.reload();
        } catch (error) {
          console.error("Error:", error.response.data);
          alert("نشد! یه مشکلی وجود داره")
        }
    };

    function validToken() {
        let token = localStorage.getItem('token');

        if (token == null || token == "LOGGEDOUT") {
            return false
        } else {
            var decodedToken = jwtDecode(token);
            var currentDate = new Date();
        }
  
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          return false
        } else {   
          return true
        }
    }

    function SendCommentsLink(){

        const fetchedData = []

        for (const link of data.comments){

            fetchedData.unshift(<PostMiniProfile data={link} />)
        }

        return fetchedData
    }

    if (!validToken()) {
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
                                            <img src={profile} className="account-user-img" alt="Hossein Akbari" />
                                        </div>
                                        <p style={{textAlign: "center", padding: "15px 0px 0px 0px"}}>{data.name}</p>
                                        
                                    </div>

                                    <div className="account-sidebar-links"><span onClick={() => { setexpand(false) }} style={expand ? { } : {background: "#29a58d", color: "#fff"}}>پروفایل من</span></div>
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
                                            <p>{data.bio}</p>
                                            <div className="activity">
                                                <h5 className="h5-mini-profile">سوال های من</h5>
                                                    <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">جبر چیست؟</Link></p>
                                                    <p><Link to="/questions/لورم-ایپسوم-متن-ساختگی" className="post-mini-profile">چطور این فرمول را حساب کنم</Link></p>
                                                <h5 className="h5-mini-profile">پاسخ های من</h5>
                                                    {SendCommentsLink()}
                                            </div>
                                        </div>
                                        <div style={expand ? { } : {display: 'none'}}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="edit-profile-box">
                                                    <span>نام و نام خانوادگی : </span><input name="name" onChange={handleChange} className="edit-profile-box-input" type="text" placeholder={data.name} />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>بایو (زمینه فعالیت) : </span><input name="bio" onChange={handleChange} className="edit-profile-box-input" type="text" placeholder={data.bio} />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>پسورد فعلی : </span><input required name="current_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>پسورد جدید : </span><input name="new_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>ایمیل : </span><input name="email" onChange={handleChange} className="edit-profile-box-input" type="text" placeholder={data.email} />
                                                </div>
                                                <button className="save-profile-box" type="submit">ذخیره تغییرات</button>
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