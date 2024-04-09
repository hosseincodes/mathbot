import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from "./Loader";


function PostMiniProfile(props) {

    const {data} = props
    
    const [postData, setpostData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(data).then((res) => {
            setpostData(res.data)
            setIsLoading(false)
        })
    }, [])

    function deletePost(postId) {
        postobject.delete("https://server.mathbot.ir/api/posts/" + postId + "/delete/").then(response => {
            console.log('Resource deleted successfully:', response.data);
            alert("پست با موفقیت پاک شد");
            window.location.reload();
          })
          .catch(error => {
            console.error('Error deleting resource:', error);
            alert("پست پاک نشد! یه مشکلی وجود داره");
          })
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

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="col-md-12 col-xs-12">
                <div className="comments-showing-accountPage">
                    <div className="col-md-1">
                        <span className="comment-button" onClick={() => deletePost(postData.id)}><i class="fa fa-trash"></i></span>
                    </div>
                    <div className="col-md-1">
                        <Link to={`/questions/${postData.id}`}><span className="comment-button" ><i class="fa fa-solid fa-eye"></i></span></Link>
                    </div>
                    <div className="col-md-10">
                        <h5>{postData.title}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostMiniProfile;