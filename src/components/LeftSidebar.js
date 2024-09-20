import React from "react";
import { Link } from "react-router-dom";

function LeftSidebar() {
    
    return (
        <>
            <div className="sidebar">
                <p style={{textAlign: "left"}}>Ranking <i style={{color: "#29a58d"}}  class="fa-solid fa-fire"></i></p>
            </div>
            <div className="sidebar">
                <h5 className="upcoming-contest-sidebar">مسابقات پیش رو</h5>
                <Link className="sidebar-user-links" to="/soon">
                    <div className="contest-sidebar-box">
                        <div className="contest-sidebar-title">
                            <p>
                                مسابقه هفتگی مث بات دوره اول
                            </p>
                        </div>
                        <div>
                            <p>
                                تاریخ برگزاری: ۳ مهر ۱۴۰۳ ساعت ۲۲:۳۰
                            </p>
                            <p>
                                1532 شرکت کننده
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default LeftSidebar;