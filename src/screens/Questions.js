import React, { useEffect, useState } from 'react';
import Response from '../components/Response';
import { useParams , Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import profile from '../assets/images/profile.png';
import axios from 'axios';
import UploadComment from '../components/UploadComment';
import Loader from "../components/Loader";
import renderHTML from 'react-render-html'; 

function Questions() {

    const {id} = useParams();    

    const [data, setdata] = useState([])
    const [commentData, setcommentData] = useState([])
    const [creator, setcreator] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            axios.get("https://server.mathbot.ir/api/posts/" + id + "/").then((res) => {

                setdata(res.data);

                function getComments() {

                    const fetchedData = []

                    for (const link of res.data.comments){
                        try {
                            axios.get(link).then((res) => {
                                fetchedData.push(res.data)
                            })
                        } catch(error){
                            console.log("error fetching data", error)
                        }
                    }

                    setcommentData(fetchedData)
                }

                getComments()

                axios.get(res.data.creator).then((res) => {
                    setcreator(res.data)
                })

                setIsLoading(false)

            })

    },[id])

    function deletePost() {
        axios.delete("https://server.mathbot.ir/api/posts/" + id + "/delete/").then(response => {
            console.log('Resource deleted successfully:', response.data);
            alert("پست با موفقیت پاک شد");
          })
          .catch(error => {
            console.error('Error deleting resource:', error);
            alert("پست پاک نشد! یه مشکلی وجود داره");
          })
    }

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <div>
    
                <Header />
    
                <Helmet>
                    <title>{data.title}</title>
                </Helmet>
    
                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
    
                        <div className="breadcrumb">
                            <h6><Link to="/">انجمن</Link> / <Link to={`/questions/${data.id}`}>{data.title}</Link></h6>
                        </div>
                
                        <div className="col-md-12 col-xs-12 responsive-box">
                            <div className="question-box-big">
                                <div className="forum-title-QuestionBox">
                                    <h3>{data.title}</h3>
                                    <div className="row question-box-big-details">
                                        <Link className="username-answer" to={`/users/${creator.username}`}>
                                            <div className="col-md-4 col-sm-4 col-xs-4 forum-title-ask">
                                                <div className="account-user-img-box">
                                                    <img src={profile} className="account-user-img-little" alt={creator.name} />
                                                </div>
                                                <h6>{creator.name}</h6>
                                            </div>
                                        </Link>
                                        <div className="col-md-2 col-sm-4 col-xs-4 forum-title-view">
                                            <h6>{data.created_at}</h6>
                                        </div>
                                        <div className="col-md-2 col-sm-4 col-xs-4 forum-title-last-seen">
                                            <h6>???? بازدید</h6>
                                        </div>
                                        <div className="col-md-4 col-xs-12">
                                            <Link to="/" className="title-a" onClick={deletePost}><i class="fa fa-trash"></i> پاک کردن پست</Link>
                                        </div>
                                    </div>
                                </div>
                                <p className="question-box-big-p">{renderHTML(data.content)}</p>
                                
                                {/* <div className="question-tag-box">
                                    <p><span className="question-tag-span">انتگرال</span><span className="question-tag-span">جبر</span><span className="question-tag-span">هندسه</span><span className="question-tag-span">متوسطه اول</span></p>
                                </div> */}
                            </div>
                        </div>
    
                        <div className="forum-title-questions">
                            <h3>پاسخ ها</h3>
                        </div>
    
                        <Response data={commentData} />
    
                        <div className="forum-title-questions">
                            <h3>پاسخ شما</h3>
                        </div>
                
                        <UploadComment postId={id} />
    
                    </div>
    
                    </div>
                </div>
    
                <Footer />
    
            </div>
        )
    }
}

export default Questions;