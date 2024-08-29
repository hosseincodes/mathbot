import React, { useEffect, useState } from 'react';
import Creator from './Creator';
import Loader from "./Loader";
import axios from 'axios';

function Comment(props) {

    const {data} = props
    
    const [commentData, setcommentData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(data).then((res) => {
            setcommentData(res.data)
            setIsLoading(false)
        })
    }, [data])

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <div>
                <div className="col-md-12 col-xs-12 responsive-box" id={commentData.id}>
                    <div className="question-answer-big">
                        <Creator data = {commentData.creator} />
                        <h6>&nbsp; {commentData.created_at}</h6>
                        <p>{commentData.content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;