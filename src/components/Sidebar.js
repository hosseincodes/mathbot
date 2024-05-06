import React from "react";
import IsAuthenticated from "../utils/IsAuthenticated";

function Sidebar() {
    
    return (
        <>
            {IsAuthenticated() === "Not Authenticated" ? (<></>) : (
                <div className="sidebar">
                    <p><i class="fa-solid fa-clipboard-question"></i> سوال های من</p>
                    <p><i class="fa-regular fa-bookmark"></i> بعدا حل می کنم</p>
                    <p><i class="fa-regular fa-thumbs-up"></i> سوال های مورد علاقه</p>
                </div>
            )}
            <div className="sidebar">
                <p>موضوعات داغ!</p>
                <p>کنکور</p>
                <p>انتگرال</p>
                <p>مشتق</p>
                <p>ریاضی ۲</p>
            </div>
            <div className="sidebar">
                <p>تبلیغات</p>
            </div>
            <div className="sidebar contact-links">
                <a className="contact-icons-sidebar" href="http://instagram.com/themathbot "><i className="fab fa-instagram "></i></a>
                <a className="contact-icons-sidebar" href="http://t.me/math_20_bot_channel "><i className="fab fa-telegram "></i></a>
                <a className="contact-icons-sidebar" href="http://github.com/hosseincodes/mathbot "><i className="fab fa-github "></i></a>
            </div>
        </>
    );
}

export default Sidebar;