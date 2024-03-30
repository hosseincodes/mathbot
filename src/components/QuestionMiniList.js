import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function QuestionMiniList(props) {

    const id = props.id
    const [lisitng, setListing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://server.mathbot.ir/api/posts/?page=' + id);
            const json = await response.json();
            setIsLoading(false);
            setListing(json.results);
          };
      
          fetchData();
    },[id])

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            {lisitng.map((data) =>
                <div className="col-md-12 col-xs-12 responsive-box">
                    <div className="question-box">
                        <Link className="question-box-link" to={`/questions/${data.id}`}>
                            <h4>{data.title}</h4>
                        </Link>
                        <div className="row question-box-bottom">
                            <div className="col-lg-3 col-md-4 col-xs-12 col-sm-4">
                                <p className="question-date">{data.created_at}</p>
                            </div>
                            {/* <div className="col-lg-6 col-nd-8 col-xs-12 col-sm-8">
                                <p className="question-tag">{data.question_tag}</p>
                            </div>
                            <div className="col-md-2">     
                                <p className="question-visit">{data.question_visit}</p>
                            </div>
                            <div className="col-md-1">
                                <p className="question-answer">{val.question_answer}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                )
            }     
        </div>
    );        
    
}

export default QuestionMiniList;