import React, { Component } from 'react';
import UploadPost from '../components/UploadPost';
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Ask extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>پست جدید</title>
                </Helmet>
                
                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="row ask-your-Q">
                                <h3>نوشتن پست جدید</h3>
                            </div>
                
                            <UploadPost />

                        </div>
            
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Ask;