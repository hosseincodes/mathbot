import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

class Search extends Component {
    render () {
        return (
            <div>

                <Header />

                <Helmet>
                    <title>Search</title>
                </Helmet>

                <div className="section">
                    <div className="container">
                        <div className="col-md-12 responsive-box">

                            <SearchBox />

                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Search;