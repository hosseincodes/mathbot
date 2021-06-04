import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="row">

                    <div className="col-md-3 col-xs-3 header-icons-box">
                        
                        <Link to="/login">
                            <div className="header-buttons">       
                                Login <i class="fas fa-sign-in-alt header-buttons-ico"></i>
                            </div>
                        </Link>
                        
                        <Link title="Notifications" to="/"> 
                            <div className="header-buttons">
                                <i class="fas fa-bullhorn header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Guide" to="/">
                            <div className="header-buttons">
                                <i class="fas fa-question header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Create Post" to="/questions/ask">
                            <div className="header-buttons">
                                <i class="fas fa-plus header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Popular" to="/">
                            <div className="header-buttons">
                                <i class="fas fa-fire-alt header-buttons-ico"></i>
                            </div>
                        </Link>

                        <Link title="Calculator" to="/">
                            <div className="header-buttons">
                                <i class="fas fa-calculator header-buttons-ico"></i>
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-7">
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

                    <div className="col-md-2 col-xs-9">
                        <div className="logo-button">
                            <Link to="/">
                                <img src={logo} class="logo-img" alt="Image" />
                            </Link>
                        </div>
                    </div>
                    
                 </div>
            </div>
        );
    }
}

export default Header;