import React, { useEffect, useState } from 'react';
import Response from '../components/Response';
import RichEditor from '../components/RichEditor';
import { useParams , Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
// import profile from '../assets/images/hossein.png';
import axios from 'axios';

function Questions() {

    const {id} = useParams();    

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("https://server.mathbot.ir/api/posts/" + id + "/").then((res) => {
            setdata(res.data)
        })
    })

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
                                    {/* <Link className="username-answer" to="/users/ali">
                                        <div className="col-md-4 col-sm-4 col-xs-4 forum-title-ask">
                                            <div className="account-user-img-box">
                                                <img src={profile} className="account-user-img-little" alt="Hossein Akbari" />
                                            </div>
                                            <h6>علی اکبری</h6>
                                        </div>
                                    </Link> */}
                                    <div className="col-md-2 col-sm-4 col-xs-4 forum-title-view">
                                        <h6>{data.created_at}</h6>
                                    </div>
                                    {/* <div className="col-md-2 col-sm-4 col-xs-4 forum-title-last-seen">
                                        <h6>3000 بازدید</h6>
                                    </div> */}
                                    <div className="col-md-4 col-xs-12">
                                        <Link to="/" className="title-a" onClick={deletePost}><i class="fa fa-trash"></i> پاک کردن پست</Link>
                                    </div>
                                </div>
                            </div>
                            <p className="question-box-big-p">{data.content}</p>
                            {/* <div className="question-tag-box">
                                <p><span className="question-tag-span">انتگرال</span><span className="question-tag-span">جبر</span><span className="question-tag-span">هندسه</span><span className="question-tag-span">متوسطه اول</span></p>
                            </div> */}
                        </div>
                    </div>

                    <div className="forum-title-questions">
                        <h3>3 پاسخ</h3>
                    </div>
            
                    <Response />
                    <Response />
                    <Response />

                    <div className="forum-title-questions">
                        <h3>پاسخ شما</h3>
                    </div>
            
                    <div className="your-answer-box">
                        <RichEditor />
                        <input className="ask-input-button" type="button" value="ارسال پاسخ" />
                    </div>

                </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Questions;