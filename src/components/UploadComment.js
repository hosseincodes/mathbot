import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function UploadComment(props) {

    const post = props.postId

    const [content, setContent] = useState() 

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
        const response = await postobject.post("/comments/create/", {
          content: content,
          post_id: post
        });
        console.log("Post created:", response.data);
        alert("پاسخ با موفقیت آپلود شد");
        window.location.reload();
      } catch (error) {
        console.error("Error creating post:", error.response.data);
        alert("پاسخ آپلود نشد! یه مشکلی وجود داره")
      }
    };

    function validToken() {
      let token = localStorage.getItem('token');
        
        if (token == null) {
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

    if (!validToken()) {
      return (
        <>
          <p>جهت ثبت پاسخ ابتدا <Link to="/login">وارد شوید</Link></p>
        </>
      )
    } else {
      return (
        <div className="your-answer-box">
            <form onSubmit={handleSubmit}>
                <div classNameName="ask-description">
                    <h4>توضیحات</h4>
 
                    <CKEditor
                        editor={ ClassicEditor }
                        onReady={ ( editor ) => {
                        console.log( "ادیتور آماده استفاده است!", editor );
                        } }
                        onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data);
                        } }
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