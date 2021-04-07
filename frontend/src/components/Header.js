import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="row"> 

                    <div className="col-md-4 col-xs-9">

                        <Link className="logo-button" to="/">
                            <span>انجمن پرسش و پاسخ ریاضی <span className="logo-button-span">م</span>ث <span className="logo-button-span">ب</span>ات</span>
                        </Link>

                    </div>

                    <div className="col-md-3"></div>

                    <div className="col-md-3">

                        {/* Fake Search Box */}
                        <Link className="search-box">
                            <i class="fas fa-search search-btn"></i><span>جستجو در سایت</span>
                        </Link>

                    </div>

                    <div className="col-md-2 col-xs-3">

                        <Link className="login-button" to="/login">
                            <span>ورود</span>
                        </Link>

                    </div>

                </div>
            </div>
        );
    }
}

export default Header;