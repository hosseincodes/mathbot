import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Creator from './Creator';

function MiniUploadPostHomePage() {

    return (
        <>
                <div className="col-md-12 col-xs-12 responsive-box">
                    <div className="question-box">
                        <Link className="question-box-link" to={`/questions/${data.id}`}>
                            
                        </Link>
                    </div>
                </div>
                )     
        </>
    );   
    
}

export default MiniUploadPostHomePage;