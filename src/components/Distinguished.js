import React, { Component } from "react";
import { Link } from "react-router-dom";
// import JSONDATA from '../api/QUESTIONS_DATA.json';
import profile from '../assets/images/hossein.png';

class Distinguished extends Component {
    render () {
        return (
            <div>
                {/* {JSONDATA.map((val, key) => {
                    return <div className="col-md-3 col-xs-6 responsive-box">
                                <div className="the-best-box">
                                    <Link className="question-box-link" to="/users/ali">
                                        <div className="the-best-img-box">
                                            <img src={profile} className="account-user-img-big" alt="Hossein Akbari" />
                                        </div>
                                        <h4>{val.question_name}</h4>
                                    </Link>
                                </div>
                            </div>
                })} */}
            </div>
        );
    }
}

export default Distinguished;