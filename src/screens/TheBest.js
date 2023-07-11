import React, { Component } from "react";
import Distinguished from '../components/Distinguished';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

class TheBest extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>The Best</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="forum-title">
                                <h3><i style={{color: "red"}} class="fas fa-fire-alt"></i> بهترین ها</h3>
                            </div>

                            <Distinguished />

                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default TheBest;