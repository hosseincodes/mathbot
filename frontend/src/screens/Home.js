import React from "react";
import PostsListHomePage from '../components/PostsListHomePage.js';
import { Helmet } from 'react-helmet';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import LeftSidebar from "../components/LeftSidebar.js";
import ContestLargeBoxIntroduction from "../components/ContestLargeBoxIntroduction.js";

function Home() {

    return (
        <div>

            <Header />

            <Helmet>
                <title>Mathbot</title>
                <meta name="keywords" content="مث بات, mathbot"></meta>
            </Helmet>

            <div className="section">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <ContestLargeBoxIntroduction />
                        </div>
                    </div>

                    <div className="col-md-3 responsive-box">
                        <LeftSidebar />
                    </div>

                    <div className="col-md-9 responsive-box">
                        
                        <PostsListHomePage/>

                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Home;