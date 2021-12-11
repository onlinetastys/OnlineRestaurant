import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'


let appClassName = ""
let onNavOpenBodyClass = "bodyOpen"

const NavBar = ({app}:any) => {
    const [isOpened, setIsOpenened] = useState(false);

    function openNav() {
        appClassName = appClassName === "" ? app.current.className
                                : appClassName; 

        if(!app.current.className.includes(onNavOpenBodyClass))
            app.current.className = appClassName + " " + onNavOpenBodyClass

        setIsOpenened(true);
    } 
    function closeNav() {
        setIsOpenened(false);
        app.current.className = appClassName;
    } 
    
    return (
    <>
        <GiHamburgerMenu className="navbar-open-btn" onClick={openNav} />
        <div className={isOpened ? "navbar navbarOpen" : "navbar"}>
            <ImCross onClick={closeNav} style={{color: "white"}}/>
            <a href="#home">Home</a>
            <a className="navlink" href="#about">About</a>
            <a className="navlink" href="#news">News</a>
            <a className="navlink" href="#contact">Contact</a>
        </div>
    </>
    )
}



export default NavBar;