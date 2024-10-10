import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import LeftSidebar from "../components/LeftSidebar";
import { Link } from "react-router-dom";

function Contest() {

    return (
        <div>

            <Header />

                    <Helmet>
                        <title>مسابقه</title>
                    </Helmet>

                    <div className="section">
                        <div className="container">
                            <div className="col-md-12 responsive-box">

                            <div className="breadcrumb">
                                <h6><Link to="/">مسابقات</Link> / <Link to={`/Contests/`}>تست</Link></h6>
                            </div>

                            <div className="col-md-3 responsive-box">
                                <Sidebar />
                            </div>
                    
                            <div className="col-md-6 col-xs-12 responsive-box">
                                <div className="post-box-big">
                                    <div className="forum-title-postBox">
                                        <h3>تست</h3>
                                        <div className="row post-box-big-details">
                                            <Link className="username-answer" to={`/users/`}>
                                                <div className="col-md-4 col-sm-4 col-xs-4 forum-title-ask">
                                                    <div className="account-user-img-box">
                                                    </div>
                                                    <h6>تست</h6>
                                                </div>
                                            </Link>
                                            <div className="col-md-4 col-sm-4 col-xs-4 forum-title-view">
                                                <h6>تست</h6>
                                            </div>
                                            <div className="col-md-4 col-sm-4 col-xs-4 forum-title-last-seen">
                                                <h6>تست <i class="fa-regular fa-comments"></i></h6>
                                            </div>
                                        </div>
                                    </div>

         
                                    
                                    <div className="post-content-box">
                                        <p>تست</p>
                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-md-3 responsive-box">
                                <LeftSidebar />
                            </div>

                        </div>

                        </div>
                    </div>

            <Footer />

        </div>
    )
}

export default Contest;