import React from "react";
import IsAuthenticated from "../utils/IsAuthenticated";
import { Link } from "react-router-dom";

function Footer() {
    
    return (
        <div className="footer ">
            <div className="container ">
                <div className="row ">
                    <div className="footerBox">
                        <p>به یاد <a target="_blank" rel="noreferrer" href="https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D9%85_%D9%85%DB%8C%D8%B1%D8%B2%D8%A7%D8%AE%D8%A7%D9%86%DB%8C">مریم میرزاخانی</a> / <Link to="/contact">تماس با ما</Link></p>
                    </div>
                    <div className="mobile-header">
                        
                        {IsAuthenticated() !== "Not Authenticated" ? (
                            <>
                                <Link to="/account">
                                    <span className="mobile-header-button">
                                            <i className="fa-solid fa-user header-buttons-ico"></i>
                                    </span>
                                </Link>
                                <Link to="/notifications">
                                    <span className="mobile-header-button">
                                        <i class="fa-regular fa-bell header-buttons-ico"></i>
                                    </span>
                                </Link> 
                            </>    
                        ) : (
                            <Link to="/login">
                                <span className="mobile-header-button">
                                    <i className="fa-solid fa-right-to-bracket header-buttons-ico"></i>
                                </span>
                            </Link>
                        )}

                        
                        <Link to="/questions/ask">
                            <span className="mobile-header-button">
                                <i className="fas fa-plus header-buttons-ico"></i>
                            </span>
                        </Link>

                        <Link to="/search">
                            <span className="mobile-header-button">
                                <i className="fas fa-search header-buttons-ico"></i>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;