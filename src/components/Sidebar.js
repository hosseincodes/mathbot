import React from "react";
import IsAuthenticated from "../utils/IsAuthenticated";
import { Link } from "react-router-dom";

function Sidebar() {

    const username = IsAuthenticated()
    
    return (
        <>
            {username === "Not Authenticated" ? (
                <Link to="/login">
                    <div className="sidebar login-text-green">
                        <p>برای ثبت سوال یا پاسخ دادن به سوال های بقیه وارد حساب کاربری خود شوید</p>
                    </div>
                </Link>
            ) : (
                <div className="sidebar">
                    <Link className="sidebar-user-links" to={`/users/${username}`}><p><i class="fa-solid fa-user"></i> پروفایل من</p></Link>
                    <Link className="sidebar-user-links" to="/soon"><p><i class="fa-regular fa-bookmark"></i> بعدا حل می کنم</p></Link>
                    <Link className="sidebar-user-links" to="/soon"><p><i class="fa-regular fa-thumbs-up"></i> سوال های مورد علاقه</p></Link>
                </div>
            )}
            <div className="sidebar contact-links">
                <a className="contact-icons-sidebar" href="http://instagram.com/themathbot "><i className="fab fa-instagram "></i></a>
                <a className="contact-icons-sidebar" href="http://t.me/math_20_bot_channel "><i className="fab fa-telegram "></i></a>
                <a className="contact-icons-sidebar" href="http://github.com/hosseincodes/mathbot "><i className="fab fa-github "></i></a>
            </div>
        </>
    );
}

export default Sidebar;