import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Hossein from '../assets/images/hossein-akbari.jpeg';
import Maziar from '../assets/images/maziar-heidari.jpg';
import Olia from '../assets/images/olia-abbasi.jpg';
import MohammadReza from '../assets/images/mohammadreza-taheri.jpg';

class About extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>درباره ما</title>
                </Helmet>

                <div className="about-us-section">
                    <div className="about">
                        <h1 className="about-title">تیم ما</h1>
                            <p className="about-description">اگر علاقه مند به عضویت در تیم ما و کار روی پروژه های اپن سورس دارید با ما ارتباط بگیرید</p>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team-box">
                                        <img src={Hossein} className="our-team-img" alt="Hossein Akbari" />
                                        <h3>Hossein Akbari</h3>
                                        <h4>Full-stack Developer</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team-box">
                                        <img src={Maziar} className="our-team-img" alt="Maziar Heidari" />
                                        <h3>Maziar Heidari</h3>
                                        <h4>Backend Developer</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team-box">
                                        <img src={Olia} className="our-team-img" alt="Olia Abbasi" />
                                        <h3>Olia Abbasi</h3>
                                        <h4>UX UI designer</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="our-team-box">
                                        <img src={MohammadReza} className="our-team-img" alt="MohammadReza Taheri" />
                                        <h3>MohammadReza Taheri</h3>
                                        <h4>Frontend Developer</h4>
                                    </div>
                                </div>
                            </div>                            
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default About;