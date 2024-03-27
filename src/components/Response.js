import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import profile from '../assets/images/hossein.png';

function Response(props) {

    const id = props.id
    const [data, setdata] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://server.mathbot.ir/api/comments/');
            const json = await response.json();
            setdata(json);
        };
      
        fetchData();
        
    },[])

    return (
        <div>
            {data.map((nextdata) =>
                {if (nextdata.post === id) {
                    return(
                        <div className="col-md-12 col-xs-12 responsive-box">
                            <div className="question-answer-big">
                                <Link className="username-answer" to="/users/ali">
                                    {/* <div className="forum-title-ask">
                                        <div className="account-user-img-box">
                                            <img src={profile} className="account-user-img-little" alt="Hossein Akbari" />
                                        </div>
                                        <h6>علی اکبری</h6>
                                    </div> */}
                                </Link>
                                <h6>&nbsp; {nextdata.created_at}</h6>
                                <p className="question-answer-big-p">{nextdata.content}</p>
                            </div>
                        </div>
                    )     
                }}
            )}

        </div>
    );
}

export default Response;