import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render () {
        return (
            <div class="footer ">
                <div class="container ">
                    <div class="row ">
                        <p>به یاد <a target="_blank" rel="noreferrer" href="https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D9%85_%D9%85%DB%8C%D8%B1%D8%B2%D8%A7%D8%AE%D8%A7%D9%86%DB%8C">مریم میرزاخانی</a> / <Link to="/contact">تماس با ما</Link></p>
                        <p className="mobile-header"><Link to="/login">ورود به حساب کاربری</Link> / <Link to="/help">راهنما</Link> / <Link to="/questions/ask">طرح پرسش جدید</Link> / <Link to="/search">جستجو</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;