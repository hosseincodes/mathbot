import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Creator(props) {

    const {data} = props

    const [creatorData, setcreatorData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(data).then((res) => {
            setcreatorData(res.data)
            setIsLoading(false)
        })
    }, [data])

    if (isLoading) {
        return (
            <div style={{float: "right"}}>
                <h6>در حال بارگذاری... </h6>
            </div>
        )
    } else {
        return (
            <div>
                <Link className="username-answer" to={`/users/${creatorData.username}`}>
                    <div className="forum-title-ask">
                        <div className="account-user-img-box">
                            <img src={creatorData.avatar} className="account-user-img-little" alt={creatorData.name} />
                        </div>
                        <h6>{creatorData.name}</h6>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Creator;