import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostMiniProfile from "../components/PostMiniProfile";
import CommentMiniProfile from "../components/CommentMiniProfile";
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Loader from "../components/Loader";

function Account() {

    const [expand, setexpand] = useState(false)
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [EditName, setEditName] = useState(false)
    const [EditImage, setEditImage] = useState(false)
    const [EditBio, setEditBio] = useState(false)
    const [EditPassword, setEditPassword] = useState(false)
    const [EditEmail, setEditEmail] = useState(false)
    const [image, setImage] = useState(null)
    const [newdata, setnewdata] = useState({
        email: '',
        current_password: '',
        new_password: '',
        avatar: '',
        name: '',
        bio: '',
      })

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token != null) {
            var decodedToken = jwtDecode(token);
            axios.get("https://server.mathbot.ir/api/accounts/" + decodedToken.username).then((res) => {
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
        
        let form_data = new FormData();
        form_data.append("avatar", newdata.avatar);
        form_data.append("email", newdata.email);
        form_data.append("bio", newdata.bio);
        form_data.append("name", newdata.name);
        form_data.append("current_password", newdata.current_password);
        form_data.append("new_password", newdata.new_password);
        
        try {
          const response = await postobject.put(`/accounts/${data.username}/edit/`, form_data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }});
          console.log(response)
          alert("تغییرات با موفقیت اعمال شد");
          window.location.reload();
        } catch (error) {
          console.error("Error:", error.response.data);
          alert("نشد! یه مشکلی وجود داره")
        }
    };

    function validToken() {
        let token = localStorage.getItem('token');

        if (token === null || token === "LOGGEDOUT") {
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
                                            <img src={data.avatar} className="account-user-img" alt={data.name} />
                                        </div>
                                        <Link to={`/users/${data.username}`}>
                                            <p style={{color: "#000", textAlign: "center", padding: "15px 0px 0px 0px"}}>{data.name}</p>
                                        </Link>
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
                                                        <img src={image} style={{width: "50px"}} className="account-user-img" alt={data.name}/>
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>نام و نام خانوادگی : {data.name} </span>
                                                    <span onClick={() => { setEditName(true) }}>
                                                        <i style={{color: "#29a58d", cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i>
                                                    </span>
                                                    <div style={EditName ? {} : {display: 'none'}} className='edit-box'>
                                                        <input name="name" onChange={handleChange} className="edit-profile-box-input" type="text" />
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>بایو (زمینه فعالیت) : {data.bio} </span>
                                                    <span onClick={() => { setEditBio(true) }}>
                                                        <i style={{color: "#29a58d", cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i>
                                                    </span>
                                                    <div style={EditBio ? {} : {display: 'none'}} className='edit-box'>
                                                        <textarea name="bio" onChange={handleChange} className="edit-profile-box-input" type="text" />
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>پسورد جدید : </span>
                                                    <span onClick={() => { setEditPassword(true) }}>
                                                        <i style={{color: "#29a58d", cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i>
                                                    </span>
                                                    <div style={EditPassword ? {} : {display: 'none'}} className='edit-box'>
                                                        <input name="new_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>ایمیل : {data.email} </span>
                                                    <span onClick={() => { setEditEmail(true) }}>
                                                        <i style={{color: "#29a58d", cursor: "pointer"}} className="fa-solid fa-pen-to-square"></i>
                                                    </span>
                                                    <div style={EditEmail ? {} : {display: 'none'}} className='edit-box'>
                                                        <input name="email" onChange={handleChange} className="edit-profile-box-input" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="edit-profile-box">
                                                    <span>* پسورد فعلی : </span><input required name="current_password" onChange={handleChange} className="edit-profile-box-input" type="password" />
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