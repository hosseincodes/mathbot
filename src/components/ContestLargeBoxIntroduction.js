import React from "react";
import { Link } from "react-router-dom";

function ContestLargeBoxIntroduction() {

    return (
        <>
            <div className="col-md-12 col-xs-12 responsive-box">
                <div className="post-box">
                    <div className="row">
                        <div className="col-md-10 col-xs-12">
                            <h5>مسابقه هفتگی مث بات دوره اول</h5>
                            <span style={{marginLeft: "5px", lineHeight: "30px"}}><i class="fa-solid fa-user-group"></i> 1532 شرکت کننده </span>
                            <span style={{marginLeft: "5px", lineHeight: "30px"}}><i class="fa-solid fa-clock"></i> تاریخ برگزاری: ۳ مهر ۱۴۰۳ ساعت ۲۲:۳۰ </span>
                            <span style={{marginLeft: "5px", lineHeight: "30px"}}><i class="fa-solid fa-location-dot"></i> شیراز، دانشگاه صنعتی شیراز</span>
                        </div>
                        <div className="col-md-2 col-xs-0">
                            <Link to="/soon">
                                <button className="contest-register-button">
                                    ثبت نام
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );    
    
}

export default ContestLargeBoxIntroduction;