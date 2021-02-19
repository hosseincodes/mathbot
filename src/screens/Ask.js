import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import AskBox from '../components/AskBox'

class Ask extends Component {
    render () {
        return (
    <div className="section">
        <div className="container">
            <div className="col-md-9">
                <div className="row ask-your-Q">
                    <h3>سوال خودت رو بپرس</h3>
                    <p>با ثبت سوالت در مث بات میتونی منتظر جواب سوالات از کل ایران باشی!</p>
                </div>
                
                <AskBox />

            </div>
            
            <Sidebar />

        </div>
    </div>
        );
    }
}

export default Ask;