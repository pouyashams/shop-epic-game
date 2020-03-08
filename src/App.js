import React from 'react';
import Navbar from './component/comman/navbar';
import Body from './component/comman/body';
import Footer from './component/comman/footer';
import {withRouter} from 'react-router-dom';
import './App.css';

function App() {
   const isPhone = () => {
        return !!(navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/Android/i));
    };
  return (
    <div className={isPhone()?"App":"App app-style"}>
          <Navbar/>
          <Body/>
          <Footer/>
    </div>
  );
}

export default withRouter(App);

