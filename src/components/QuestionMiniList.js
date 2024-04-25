import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function QuestionMiniList(props) {

    const id = props.id
    const [lisitng, setListing] = useState([]);
    const [fetchError, setfetchError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://server.mathbot.ir/api/posts/?page=' + id);
                const json = await response.json();
                setIsLoading(false);
                setListing(json.results);
            } catch {
                setfetchError(true)
            }
        };
      
        fetchData();
    },[id])

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
            <div>
                {lisitng.map((data) =>
                    <div className="col-md-12 col-xs-12 responsive-box">
                        <div className="question-box">
                            <Link className="question-box-link" to={`/questions/${data.id}`}>
                                <h4>{data.title}</h4>
                                {data.image != null ? (
                                    <div className="post-img-box">
                                        <img src={data.image} className="post-img" alt={data.title} />
                                    </div>
                                ) : (<></>)}
                            </Link>
                            <div className="row question-box-bottom">
                                <div className="col-md-4">
                                    <p className="question-date">{data.created_at}</p>
                                </div>
                                <div className="col-md-7">
                                    {data.tags.split(",").map((e) => (
                                        <div className="question-tags-homepage">{e}</div>
                                    ))}
                                </div>
                                <div className="col-md-1">
                                    <p className="question-answer">{data.comments.length} پاسخ</p>
                                </div>
                            </div>

                            {/* mobile display */}
                            <div className="row question-box-bottom-mobile-display">
                                <div className="col-xs-8">
                                    {data.tags.split(",").map((e) => (
                                        <div className="question-tags-homepage-mobile-display">{e}</div>
                                    ))}
                                </div>
                                <div className="col-xs-4">
                                    <p style={{float: "left"}}>{data.comments.length} پاسخ</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    )
                }     
            </div>
        );    
    }    
    
}

export default QuestionMiniList;