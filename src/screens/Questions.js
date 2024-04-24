import React, { useEffect, useState } from 'react';
import Response from '../components/Response';
import { useParams , Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import UploadComment from '../components/UploadComment';
import Loader from "../components/Loader";
import renderHTML from 'react-render-html'; 

function Questions() {

    const {id} = useParams();    

    const [data, setdata] = useState([])
    const [creator, setcreator] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            axios.get("https://server.mathbot.ir/api/posts/" + id + "/").then((res) => {

                setdata(res.data);

                axios.get(res.data.creator).then((res) => {
                    setcreator(res.data)
                })

                setIsLoading(false)

            })

    },[id])

    function SendCommentsLink(){

        let fetchedData = []

        for (const link of data.comments){

            fetchedData.unshift(<Response data={link} />)
        }

        if (fetchedData.length === 0) {
            return (
                <div>
                    <p>هیچ پاسخی موجود نیست. اولین کسی باشید که به این سوال پاسخ می دهد</p>
                </div>
            )
        } else {
            return fetchedData
        }
    }

    return (
        <div>

            <Header />

            {isLoading ? <Loader /> : (

                <>
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
                                                        <img src={creator.avatar} className="account-user-img-little" alt={creator.name} />
                                                    </div>
                                                    <h6>{creator.name}</h6>
                                                </div>
                                            </Link>
                                            <div className="col-md-4 col-sm-4 col-xs-4 forum-title-view">
                                                <h6>{data.created_at}</h6>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 forum-title-last-seen">
                                                <h6>{data.comments.length} پاسخ</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {renderHTML(data.content)}
                                    <div>
                                    
                                    </div>
                                    
                                    <div className="question-tag-box">
                                        {data.tags.length === 0 ? (
                                            <span style={{fontSize : "12px"}}>بدون برچسب</span>
                                        ) : (
                                            data.tags.split(",").map((e) => (
                                                <div className="question-tags">{e}</div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="forum-title-questions">
                                <h3>پاسخ ها</h3>
                            </div>

                            {SendCommentsLink()}

                            <div className="forum-title-questions">
                                <h3>پاسخ شما</h3>
                            </div>
                    
                            <UploadComment postId={id} />

                        </div>

                        </div>
                    </div>
                </>

            )}

            <Footer />

        </div>
    )
}

export default Questions;