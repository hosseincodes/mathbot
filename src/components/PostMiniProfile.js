import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from "./Loader";
import config from '../utils/config';


function PostMiniProfile(props) {

    const {data} = props
    
    const [postData, setpostData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(data).then((res) => {
            setpostData(res.data)
            setIsLoading(false)
        })
    }, [data])

    function deletePost(postId) {

        const TokenConfig = config();

        TokenConfig.delete("https://server.mathbot.ir/api/posts/" + postId + "/delete/").then(response => {
            console.log('Resource deleted successfully:', response.data);
            alert("پست با موفقیت پاک شد");
            window.location.reload();
        }).catch(error => {
            console.error('Error deleting resource:', error);
            alert("پست پاک نشد! یه مشکلی وجود داره");
        })
    }

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="col-md-12 col-xs-12">
                <div className="comments-showing-accountPage">
                    <div className="col-md-1 col-xs-1">
                        <span className="comment-button" onClick={() => deletePost(postData.id)}><i className="fa fa-trash"></i></span>
                    </div>
                    <div className="col-md-1 col-xs-1">
                        <Link to={`/questions/${postData.id}`}><span className="comment-button" ><i className="fa fa-solid fa-eye"></i></span></Link>
                    </div>
                    <div className="col-xs-1"></div>
                    <div className="col-md-10 col-xs-8">
                        <h5>{postData.title}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostMiniProfile;