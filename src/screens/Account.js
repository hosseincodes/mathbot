import React, { Component } from 'react';

class Account extends Component {
    render() {
        return (
            <div class="section">
                <div class="container">
                    <div class="row account">
                        <div class="col-md-3">
                            <div class="account-sidebar">
                                <div class="account-user-img-box">
                                    <img src="../assets/images/hossein.png" class="account-user-img" alt="User Image" />
                                </div>
                                <p style="text-align: center;border-bottom: 1px solid #333;padding: 0 0 15px 0;">کاربر پیش فرض</p>
                                <div class="account-sidebar-links"><a href="#">داشبورد</a></div>
                                <div class="account-sidebar-links"><a href="#">فعالیت های من</a></div>
                                <div class="account-sidebar-links"><a href="#">ادیت پروفایل و تنظمیات</a></div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="account-section">
                                <p style="background: #29a58d;color: #fff;padding: 8px;border-radius: 10px;max-width: max-content; "> کاربر پیش فرض عزیز به پنل کاربری خوش آمدید / امروز 13 دی ماه سال 1399 </p>
                                <p style="background: red;color: #fff;padding: 8px;border-radius: 10px;max-width: max-content;">در حال حاضر وب سایت مث بات در دست توسعه می باشد و این پنل، کاربردی ندارد!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;