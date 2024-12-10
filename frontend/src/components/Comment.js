import React, { useEffect, useState } from 'react';
import Creator from './Creator.js';
import Loader from "./Loader.js";
import axios from 'axios';
import parse from 'html-react-parser';

function Comment(props) {

    const {data} = props
    
    const [commentData, setcommentData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const parsedHtml = parse(commentData.content);

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
                    <div className="post-answer-big">
                        <Creator data = {commentData.creator} />
                        <h6>&nbsp; {commentData.created_at}</h6>
                        <div className='post-content-box'>
                            {parsedHtml}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;