import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function Header() {

    const [data, setdata] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (token !== null && token !== "LOGGEDOUT") {
            var decodedToken = jwtDecode(token);
            axios.get("https://server.mathbot.ir/api/accounts/" + decodedToken.username).then((res) => {
                setdata(res.data)
            })
        }
    }, [])

    function userData() {
        return (
            <Link title="Help" to="/account">
                <div className="header-buttons header-buttons-login">       
                    {data.name}
                </div>
            </Link>
        )
    }

    function validToken() {
        let token = localStorage.getItem('token');

        if (token === null || token === "LOGGEDOUT") {
            return false
        } else {
            var decodedToken = jwtDecode(token);
            var currentDate = new Date();
        }
  
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            return false
        } else {   
            return true
        }
    }

    return (
        <div className="header">
            <div className="row">

                <div className="col-md-3 header-responsive header-icons-box">
                    
                    {validToken() ? userData() : (
                        <Link to="/login">
                            <div className="header-buttons header-buttons-login">       
                                ورود
                            </div>
                        </Link>
                    )}

                    <Link title="Help" to="/help">
                        <div className="header-buttons">
                            <i className="fas fa-question header-buttons-ico"></i>
                        </div>
                    </Link>

                    <Link title="Create Post" to="/questions/ask">
                        <div className="header-buttons">
                            <i className="fas fa-plus header-buttons-ico"></i>
                        </div>
                    </Link>

                    <Link title="Search" to="/search">
                        <div className="header-buttons">
                            <i className="fas fa-search header-buttons-ico"></i>
                        </div>
                    </Link>

                </div>

                <div className="col-md-7 header-responsive"></div>

                <div className="col-md-2">
                    <div className="logo-button">
                        <Link to="/">
                            <img src={logo} className="logo-img" alt="mathbot logo" />
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;