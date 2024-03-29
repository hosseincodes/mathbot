import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="row">

                    <div className="col-md-3 header-responsive header-icons-box">
                        
                        <Link to="/login">
                            <div className="header-buttons header-buttons-login">       
                                ورود
                            </div>
                        </Link>

                        <Link title="Help" to="/help">
                            <div className="header-buttons">
                                <i class="fas fa-question header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Create Post" to="/questions/ask">
                            <div className="header-buttons">
                                <i class="fas fa-plus header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Search" to="/search">
                            <div className="header-buttons">
                                <i class="fas fa-search header-buttons-ico"></i>
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-7 header-responsive"></div>

                    <div className="col-md-2">
                        <div className="logo-button">
                            <Link to="/">
                                <img src={logo} class="logo-img" alt="mathbot logo" />
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Header;