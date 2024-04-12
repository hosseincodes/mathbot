import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import JSONDATA from '../api/QUESTIONS_DATA.json';

function SearchBox() {
    // const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="search-box-big">
            {/* <div className="wrap">
                <div className="search">
                    <div className="searchTerm">
                        <span><i className="fa fa-search search-icon"></i></span>
                        <input
                            type="text"
                            placeholder="جستجو در سوالات ثبت شده..."
                            onChange={(event) => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                    </div> 
                </div>

                <div className="row">
                    <div className="question-search-box">
                        {JSONDATA.filter((val)=>{
                            if (searchTerm === "") {
                                return val
                            } else if (val.question_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                            return val
                        }).map((val, key)=>{
                            return (
                                <div key={key}>
                                    <div className="col-md-4">
                                        <Link className="question-box-link" to="/questions/لورم-ایپسوم-متن-ساختگی">
                                            <div className="question-box">
                                                <p>{val.question_name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                    
            </div> */}
        </div>
    );
}

export default SearchBox;