import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Creator from './Creator';

function PostsListHomePage() {

    const [lisitng, setListing] = useState([]);
    const [fetchError, setfetchError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://server.mathbot.ir/api/posts/?page=' + 1);
                const json = await response.json();
                setIsLoading(false);
                setListing(json.results);
            } catch {
                setfetchError(true)
            }
        };
      
        fetchData();
    },[])

    if (isLoading) {
        if (!fetchError) {
            return <Loader />
        } else {
            return (
                <div className="failedtofetch">
                    <span className="failedtofetch-icon"><i className="fa-solid fa-circle-exclamation"></i></span><p>عدم اتصال با سرور</p>
                </div>
            )
        }
    } else {
        return (
            <>
                {lisitng.map((data) =>
                    <div className="col-md-12 col-xs-12 responsive-box">
                        <div className="post-box">
                            <Link className="post-box-link" to={`/posts/${data.id}`}>
                                <h4>{data.title}</h4>
                                {data.image != null ? (
                                    <div className="post-img-box">
                                        <img loading="lazy" src={data.image} className="post-img" alt={data.title} />
                                    </div>
                                ) : (
                                    <div style={{marginBottom: "15px", lineHeight: "24px"}}>
                                        <span>{data.content}</span>
                                    </div>
                                )}
                            </Link>
                            <div className="row post-box-bottom">
                                <div className="col-md-4">
                                    <Creator data={data.creator} />
                                </div>
                                <div className="col-md-6">
                                    {data.tags.split(",").map((e) => (
                                        <div className="post-tags-homepage">{e}</div>
                                    ))}
                                </div>
                                <div className="col-md-2">
                                    <p className="post-answer">{data.comments.length} <i class="fa-regular fa-comments"></i></p>
                                </div>
                            </div>

                            {/* mobile display */}
                            <div className="row post-box-bottom-mobile-display">
                                <div className="col-xs-8">
                                    <Creator data={data.creator} />
                                </div>
                                <div className="col-xs-4">
                                    <span className="number-of-comments-homepage">{data.comments.length} دیدگاه</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    )
                }     
            </>
        );    
    }    
    
}

export default PostsListHomePage;