import React from "react";

function LeftSidebar() {
    
    return (
        <>
            <div className="sidebar">
                <p>مسابقات پیش رو</p>
            </div>
            <div className="sidebar">
                <p style={{textAlign: "left"}}>Ranking <i style={{color: "#29a58d"}}  class="fa-solid fa-fire"></i></p>
            </div>
        </>
    );
}

export default LeftSidebar;