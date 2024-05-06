import React, { useState } from 'react';
import axios from 'axios';
import IsAuthenticated from "../utils/IsAuthenticated";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function UploadComment(props) {

    const post = props.postId

    const [formData, setFormData] = useState({
      content: "",
      post_id: post,
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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
        const response = await postobject.post("/comments/create/", formData);
        console.log("Post created:", response.data);
        alert("پاسخ با موفقیت آپلود شد");
        window.location.reload();
      } catch (error) {
        console.error("Error creating post:", error.response.data);
        alert("پاسخ آپلود نشد! یه مشکلی وجود داره")
      }
    };

    if (IsAuthenticated() === "Not Authenticated") {
      return (
        <>
          <p>جهت ثبت پاسخ ابتدا <Link to="/login">وارد شوید</Link></p>
        </>
      )
    } else {
      return (
        <div className="your-answer-box">
            <form onSubmit={handleSubmit}>
                <div className="ask-description">
                    <h4>توضیحات</h4>
 
                    <textarea
                        className='ask-description-textarea'
                        name="content"
                        onChange={handleChange}
                    />

                </div>
                <div className="ask-button">
                    <button className="ask-input-button" type="submit">ارسال پاسخ</button>
                </div>
            </form>
        </div>
      );
    }
}

export default UploadComment;