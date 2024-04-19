import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { jwtDecode } from "jwt-decode";

function AskBox() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState()
    const [theTag, settheTag] = useState()
    const [tags, settags] = useState([])
    const [submit, setsubmit] = useState(false)
    const [successupload, setsuccessupload] = useState()
    const [data, setdata] = useState([])
    
    // Function to handle form input changes
    const handleChange = (e) => {
        setTitle(e.target.value);
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
            const response = await postobject.post("/posts/create/", {
                title: title,
                content: content,
                tags: tags.toString()
            });
            setdata(response.data)
            setsubmit(true)
            setsuccessupload(true)
        } catch (error) {
            console.error("Error creating post:", error.response.data);
            setsubmit(true)
            setsuccessupload(false)
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

    function eraseText() {
        document.getElementById("output").value = "";
    }

    function removeTag(index){
        settags(tags.filter((el, i) => i !== index))        
    }

    if (!validToken()) {
        return (
            <>
              <p>جهت ثبت سوال ابتدا <Link to="/login">وارد شوید</Link></p>
            </>
        )
    } else {
        if (submit) {
            return (
                <>
                    {successupload ? (
                        <>
                            <div className='success-actions'><p>پست با موفقیت آپلود شد</p></div>
                            <div>
                                <p>سوال آپلود شده: </p>
                                <div className="col-md-12 col-xs-12 responsive-box">
                                    <div className="question-box">
                                        <Link className="question-box-link" to={`/questions/${data.id}`}>
                                            <h4>{data.title}</h4>
                                        </Link>
                                        <div className="row question-box-bottom">
                                            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                                                <p className="question-date">{data.created_at}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <div className='faile-actions'><p>پست آپلود نشد! یه مشکلی وجود داره</p></div>}
                    <div className='back-to-ask-box' onClick={() => { setsubmit(false) }}>
                        <p>برگشت به صفحه ثبت سوال جدید</p>
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <div className="ask-box">
                        <form onSubmit={handleSubmit}>
                            <div className="ask-title">
                                <h4>نام سوال</h4>
                                <input
                                    name="title"
                                    onChange={handleChange}
                                    className="ask-input-title"
                                    placeholder="مثلا کمترین تعداد علامت جمع مورد نیاز برای نمایش حاصل عددی عبارت کدام است؟"
                                />
                            </div>
        
                            <div className="ask-description">
                                <h4>توضیحات</h4>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setContent(data)
                                    } }
                                />
                            </div>
        
                            <div className="ask-tags">
                                <h4>برچسب ها <span style={{fontSize: "12px"}}>(حداکثر ۵ برچسب)</span></h4>
                                <textarea id='output' onChange={(e)=> {settheTag(e.target.value)}} className="ask-input-tags" placeholder="مثلا انتگرال ..." type="text"/>
                                <span onClick={() => {
                                    if (tags.length >= 5) {
                                        alert("بیش از ۵ برچسب نمی توانید وارد کنید")
                                    } else {
                                        settags([...tags, theTag]); eraseText();
                                    }
                                }} className="tags-button">افزودن</span>
                                {tags.map((e, index) => (
                                    <div style={{display: "inline-block"}} key={index} >
                                        <span className='question-tag-span'>{e} <span onClick={() => {removeTag(index)}}><i style={{cursor: "pointer"}} className="fa-solid fa-xmark"></i></span></span>
                                    </div>
                                ))}
                            </div>

                            <div className="ask-button">
                                <button className="ask-input-button" type="submit">ارسال سوال</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default AskBox;