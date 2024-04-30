import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

function Sidebar() {
    function validToken() {
        let token = localStorage.getItem('token');

        if (token === null || token === "LOGGEDOUT") {
            return false
        } else {
            var decodedToken = jwtDecode(token);
            var currentDate = new Date();
        }
  
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            return false
        } else {   
            return true
        }
    }
    return (
        <>
            <div className="sidebar">
                <p>عکس پروفایل و یوزرنیم با لینک به پروفایل</p>
                <p><i class="fa-solid fa-clipboard-question"></i> سوال های من</p>
                <p><i class="fa-regular fa-bookmark"></i> بعدا حل می کنم</p>
                <p><i class="fa-regular fa-thumbs-up"></i> سوال های مورد علاقه</p>
            </div>
            <div className="sidebar">
                <p>دنبال شده ها</p>
                <p>اکانت ۱</p>
                <p>اکانت ۲</p>
            </div>
            <div className="sidebar">
                <p>موضوعات داغ!</p>
                <p>کنکور</p>
                <p>انتگرال</p>
                <p>مشتق</p>
                <p>ریاضی ۲</p>
            </div>
            <div className="sidebar">
                <p>لینک سوشال مدیا</p>
            </div>
        </>
    );
}

export default Sidebar;