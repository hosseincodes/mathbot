import React, { Component } from "react";

class SearchBox extends Component {
    render () {
        return (
            <div className="search-box-big">
                <div className="wrap">
                    <div className="search">
                        <div className="searchTerm">
                            <span><i className="fa fa-search search-icon"></i></span>
                            <input type="text" placeholder="جستجو در سوالات ثبت شده..."/>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;