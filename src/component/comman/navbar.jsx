import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import slideOne from "../../image/slidshow/slide-one.jpg"
import logo from "../../image/main/epic-game-title.png"

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    isPhone = () => {
        return !!(navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/Android/i));
    };

    openNav = () => {
        document.getElementById("mySidebar").style.width = "200px";
    };

    closeNav = () => {
        document.getElementById("mySidebar").style.width = "0px";
    };

    render() {
        return (
            <div>
                     <nav className="navbar bg-dark">
                         <div className="navbar-expand-sm row">
                             <div className="row pl-3">
                                 {this.isPhone() ? <div>
                                     <div id="mySidebar" className="sidebar">
                                         <span className="closebtn"
                                            onClick={((e) => this.closeNav())}>×</span>
                                         <label className="col-12 pb-2 text-white color-style-border border-bottom text-center"
                                                onClick={((e) => {window.location = 'https://epicgame.ir/'})}
                                         >خانه</label>
                                         <label className="col-12 pb-2 text-white color-style-border border-bottom text-center"
                                                onClick={((e) => {window.location = 'https://epicgame.ir/'})}
                                         >گیفت کارت</label>
                                         <label className="col-12 pb-2 text-white color-style-border border-bottom text-center"
                                                onClick={((e) => {window.location = 'https://epicgame.ir/'})}
                                         >اکانت ترکیبی</label>
                                         <label className="col-12 pb-2 text-white color-style-border border-bottom text-center"
                                                onClick={((e) => {window.location = 'https://epicgame.ir/'})}
                                         >اموزش</label>
                                         <label className="col-12 pb-2 text-white color-style-border border-bottom text-center"
                                                onClick={((e) => {window.location = 'https://t.me/epicgameir'})}
                                             >تلگرام</label>
                                     </div>
                                     <div className="border-right">
                                         <button className="navbar-toggler" type="button"
                                                 onClick={((e) => this.openNav())}
                                         >
                                             <span className="fa fa-navicon"/>
                                         </button>
                                     </div>
                                 </div> : null}
                                 <div className="border-right px-3 pointer">
                                     <span className="fa fa-shopping-bag bag-style pt-1"/>
                                 </div>
                                 {this.isPhone() ? <div className="px-3">
                                         <span className="fa fa-user user-style pt-1"/>
                                     </div> : <button type="button" className="btn btn-outline-light btn-sm ml-3 radius"
                                     >ورود/ثبت نام <span className="fa fa-user"/>
                                     </button>}
                             </div>
                         </div>
                         <div className="justify-content-end">
                             <img src={logo} width="110" height="35" alt="Responsive image"/>
                         </div>
                     </nav>
                     <nav className="navbar navbar-expand-sm bg-dark">
                         <span className="navbar-brand"/>
                         <div className="collapse navbar-collapse justify-content-end">
                             <ul className="navbar-nav">
                                 <li className="nav-item px-1">
                                     <button type="button" className="btn btn-outline-light btn-sm "
                                             onClick={((e) => window.location.href = "https://t.me/epicgameir")}
                                     >تلگرام
                                     </button>
                                 </li>
                                 <li className="nav-item px-1">
                                     <button type="button" className="btn btn-outline-danger color-style color-style-border btn-sm "
                                             onClick={((e) => window.location.href = "https://epicgame.ir/")}
                                     >آموزش
                                     </button>
                                 </li>
                                 <li className="nav-item px-1">
                                     <button type="button" className="btn btn-outline-light btn-sm "
                                             onClick={((e) => window.location.href = "https://epicgame.ir/")}
                                     >اکانت ترکیبی
                                     </button>
                                 </li>
                                 <li className="nav-item px-1">
                                     <button type="button" className="btn btn-outline-danger color-style color-style-border btn-sm "
                                             onClick={((e) => window.location.href = "https://epicgame.ir/")}
                                     >گیفت کارت
                                     </button>
                                 </li>
                                 <li className="nav-item px-1">
                                     <button type="button" className="btn btn-outline-light btn-sm "
                                             onClick={((e) => window.location.href = "https://epicgame.ir/")}
                                     >خانه
                                     </button>
                                 </li>


                             </ul>
                         </div>
                     </nav>
                    {!this.isPhone() ?
                        <div className="text-center mb-0">
                            <div id="id" className="carousel slide" data-ride="carousel">
                                {/*<ul className="carousel-indicators">*/}
                                    {/*<li data-target="#id" data-slide-to="0" className="active"/>*/}
                                    {/*<li data-target="#id" data-slide-to="1"/>*/}
                                    {/*<li data-target="#id" data-slide-to="2"/>*/}
                                {/*</ul>*/}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={slideOne} alt="game"/>
                                        {/*<div className="carousel-caption">*/}
                                        {/*<h3>Los Angeles</h3>*/}
                                        {/*<p>We had such a great time in LA!</p>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="carousel-item ">
                                        <img src={slideOne} alt="game"/>
                                        {/*<div className="carousel-caption">*/}
                                        {/*<h3>Los Angeles</h3>*/}
                                        {/*<p>We had such a great time in LA!</p>*/}
                                        {/*</div>*/}
                                    </div> <div className="carousel-item ">
                                        <img src={slideOne} alt="game"/>
                                        {/*<div className="carousel-caption">*/}
                                        {/*<h3>Los Angeles</h3>*/}
                                        {/*<p>We had such a great time in LA!</p>*/}
                                        {/*</div>*/}
                                    </div> <div className="carousel-item ">
                                        <img src={slideOne} alt="game"/>
                                        {/*<div className="carousel-caption">*/}
                                        {/*<h3>Los Angeles</h3>*/}
                                        {/*<p>We had such a great time in LA!</p>*/}
                                        {/*</div>*/}
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href={"#id"} data-slide="prev">
                                    <span className="carousel-control-prev-icon"/>
                                </a>
                                <a className="carousel-control-next" href={"#id"} data-slide="next">
                                    <span className="carousel-control-next-icon"/>
                                </a>
                            </div>
                        </div>
                        : null}
            </div>
        );
    }
}

export default withRouter(navbar);
