import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loader from "./Loader";


function PostPublicProfile(props) {

    const {data} = props
    
    const [postData, setpostData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(data).then((res) => {
            setpostData(res.data)
            setIsLoading(false)
        })
    }, [data])

    if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="col-md-4 col-xs-12 responsive-box">
                <div className="question-box">
                    <Link className="question-box-link" to={`/questions/${postData.id}`}>
                        <h4>{postData.title}</h4>
                    </Link>
                    <div className="row question-box-bottom">
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <p className="question-date">{postData.created_at}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostPublicProfile;