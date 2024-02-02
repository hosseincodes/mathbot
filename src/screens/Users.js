import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuestionMiniList from '../components/QuestionMiniList';
import profile from '../assets/images/hossein.png';


class Users extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>علی اکبری</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">
                            <div className="account-user-img-box-large">
                                <img style={{width: "200px"}} src={profile} className="account-user-img" alt="Hossein Akbari" />
                            </div>
                            <div style={{textAlign: "center"}} className="forum-title">
                                <h3>علی اکبری</h3>
                                <p>سوالات ثبت شده توسط <span>علی اکبری</span></p>
                            </div>

                            <QuestionMiniList />

                        </div>

                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default Users;