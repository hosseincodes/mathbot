import React, { useEffect, useState } from 'react';
import Comment from '../components/Comment';
import { useParams , Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';
import UploadComment from '../components/UploadComment';
import Loader from "../components/Loader";
import LeftSidebar from "../components/LeftSidebar";
import renderHTML from 'react-render-html'; 

function Posts() {

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

            fetchedData.unshift(<Comment data={link} />)
        }

        if (fetchedData.length === 0) {
            return (
                <></>
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
                                <h6><Link to="/">انجمن</Link> / <Link to={`/posts/${data.id}`}>{data.title}</Link></h6>
                            </div>

                            <div className="col-md-9 col-xs-12 responsive-box">
                                <div className="post-box-big">
                                    <div className="forum-title-postBox">
                                        <h3>{data.title}</h3>
                                        <div className="row post-box-big-details">
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
                                                <h6>{data.comments.length} <i class="fa-regular fa-comments"></i></h6>
                                            </div>
                                        </div>
                                    </div>

                                    {data.image != null ? (
                                        <div className="post-img-box">
                                            <img src={data.image} className="post-img" alt={data.title} />
                                        </div>
                                    ) : (<></>)}
                                    
                                    <div className="post-content-box">
                                        {renderHTML(data.content)}
                                    </div>
                                    
                                    <div className="post-tag-box">
                                        {data.tags.length === 0 ? (
                                            <span style={{fontSize : "12px"}}>بدون برچسب</span>
                                        ) : (
                                            data.tags.split(",").map((e) => (
                                                <div className="post-tags">{e}</div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                <div className="forum-title-posts">
                                    <h3>دیدگاه ها</h3>
                                </div>

                                {SendCommentsLink()}

                                <div className="forum-title-posts">
                                    <h5>نظر خود را درباره این پست بنویسید</h5>
                                </div>
                        
                                <UploadComment postId={id} />

                            </div>

                            <div className="col-md-3 responsive-box">
                                <LeftSidebar />
                            </div>

                        </div>

                        </div>
                    </div>
                </>

            )}

            <Footer />

        </div>
    )
}

export default Posts;