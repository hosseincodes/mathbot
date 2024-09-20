import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import JSONDATA from '../api/postS_DATA.json';

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
                            placeholder="جستجو ..."
                            onChange={(event) => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                    </div> 
                </div>

                <div className="row">
                    <div className="post-search-box">
                        {JSONDATA.filter((val)=>{
                            if (searchTerm === "") {
                                return val
                            } else if (val.post_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                            return val
                        }).map((val, key)=>{
                            return (
                                <div key={key}>
                                    <div className="col-md-4">
                                        <Link className="post-box-link" to="/posts/لورم-ایپسوم-متن-ساختگی">
                                            <div className="post-box">
                                                <p>{val.post_name}</p>
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