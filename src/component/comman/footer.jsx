import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';

class footer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className="page-footer font-small ft-bg pt-4">

                <div className="container text-center text-md-left">

                    <div className="container text-center text-md-left mt-5">

                        <div className="row mt-3">


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase font-weight-bold text-warning text-right">تماس با ما</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60"}}/>
                                <p className="text-white text-right">
                                   New York, NY 10012, US  <i className="fas fa-home ml-3 text-white text-right"/> </p>
                                <p className="text-white text-right">
                                     info@example.com <i className="fas fa-envelope ml-3 text-white text-right"/></p>
                                <p className="text-white text-right">+ 01 234 567 88 <i className="fas fa-phone ml-3 text-white text-right"/></p>
                                <p className="text-white text-right">+ 01 234 567 89 <i className="fas fa-print ml-3 text-white "/></p>

                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase font-weight-bold text-warning text-right">سازندگان</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60"}}/>
                                <p className="text-right">
                                    <a className="text-white" href="#!">پویا شمسی شیل سر</a>
                                </p> <p className="text-right">
                                <a className="text-white" href="#!">پویا شمسی شیل سر</a>
                            </p> <p className="text-right">
                                <a className="text-white" href="#!">پویا شمسی شیل سر</a>
                            </p> <p className="text-right">
                                <a className="text-white" href="#!">پویا شمسی شیل سر</a>
                            </p>


                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase font-weight-bold text-right text-warning">لینک های
                                    مفید</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60"}}/>
                                <p className="text-white text-right">
                                    <a className="text-white" href="#!">آیسان پرداخت</a>
                                </p>
                                <p className="text-white text-right">
                                    <a className="text-white" href="#!">آیسان</a>
                                </p>
                                <p className="text-white text-right">
                                    <a className="text-white" href="#!">آیسان شارژ</a>
                                </p>
                                <p className="text-white text-right">
                                    <a className="text-white" href="#!">آیسانیک</a>
                                </p>

                            </div>


                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase font-weight-bold text-warning text-right">فروشگاه اینترنتی
                                    آیسان</h6>
                                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                    style={{width: "60"}}/>

                                <label className=" pt-4 text-white text-right t-justify">فروشگاه اینترنتی آیسان بزرگترین
                                    فروشنده مودم سیمکارت با بهترین قیمت و کیفیت دارای بازار کار جهانی و بی اندازه خوب
                                    بدون رقیب تنها بی کس غریب بیا بخر عشق کن باو </label>

                            </div>

                        </div>

                    </div>

                </div>

                <hr/>

                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <a href="#!" className="btn btn-danger btn-rounded">!ثبت نام</a>
                    </li>
                    <li className="list-inline-item">
                        <label className="mb-1 text-white">رایگان ثبت نام کنید</label>
                    </li>
                </ul>
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn btn-radius bg-warning mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn btn-radius bg-danger mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn btn-radius bg-primary mx-1">
                            <i className="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn btn-radius bg-info mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn btn-radius bg-success mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
                <div className="footer-copyright text-center py-3 text-white">
                    <label>.کلیه حقوق این سایت متعلق به شرکت آیسان می‌باشد هر گونه کپی برداری دارای پیگرد قانونی می باشد
                        ©</label>

                </div>


            </footer>
        );
    }
}

export default withRouter(footer);
