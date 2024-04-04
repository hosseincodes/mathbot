import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Loader from "./Loader";
import axios from 'axios';
import profile from '../assets/images/profile.png';

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
        return <Loader />;
    } else {
        return (
            <div>
                <Link className="username-answer" to={`/users/${creatorData.username}`}>
                    <div className="forum-title-ask">
                        <div className="account-user-img-box">
                            <img src={profile} className="account-user-img-little" alt={creatorData.name} />
                        </div>
                        <h6>{creatorData.name}</h6>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Creator;