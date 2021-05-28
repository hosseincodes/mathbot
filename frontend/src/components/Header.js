import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="row"> 

                    <div className="col-md-4 col-xs-9">
                        <div className="logo-button">
                            <Link to="/">
                                <span>انجمن پرسش و پاسخ ریاضی <span className="logo-button-span">م</span>ث <span className="logo-button-span">ب</span>ات</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="search-box-big">
                            <div className="wrap">
                                <div className="search">
                                    <div className="searchTerm">
                                    <span><i className="fa fa-search search-icon"></i></span>
                                    <input type="text" placeholder="Search"/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-xs-3">
                        <div className="login-button">
                            <Link to="/login">
                                <span>ورود</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Header;