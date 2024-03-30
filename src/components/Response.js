import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loader from "./Loader";
import axios from 'axios';
// import profile from '../assets/images/hossein.png';
import renderHTML from 'react-render-html'; 

function Response(props) {

    const id = props.id
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://server.mathbot.ir/api/comments/');
            const json = await response.json();
            setIsLoading(false);
            setdata(json);
        };
      
        fetchData();
        
    },[])

    function deleteComment(CommentId) {
        axios.delete("https://server.mathbot.ir/api/comments/" + CommentId + "/delete/").then(response => {
            console.log('Resource deleted successfully:', response.data);
            alert("کامنت با موفقیت پاک شد");
            window.location.reload();
          })
          .catch(error => {
            console.error('Error deleting resource:', error);
            alert("کامنت پاک نشد! یه مشکلی وجود داره");
          })
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            {data.map((nextdata) =>
                {if (nextdata.post === id) {
                    return(
                        <div className="col-md-12 col-xs-12 responsive-box">
                            <div className="question-answer-big">
                                <Link className="username-answer" to="/users/ali">
                                    {/* <div className="forum-title-ask">
                                        <div className="account-user-img-box">
                                            <img src={profile} className="account-user-img-little" alt="Hossein Akbari" />
                                        </div>
                                        <h6>علی اکبری</h6>
                                    </div> */}
                                </Link>
                                <h6>&nbsp; {nextdata.created_at}</h6>
                                <p className="question-answer-big-p">{renderHTML(nextdata.content)}</p>
                                <span className="delete-comment-button" onClick={() => deleteComment(nextdata.id)}><i class="fa fa-trash"></i> پاک کردن پاسخ</span>
                            </div>
                        </div>
                    )     
                }}
            )}

        </div>
    );
}

export default Response;