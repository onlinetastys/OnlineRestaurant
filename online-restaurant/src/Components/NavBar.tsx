import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'


let appClassName = ""
let onNavOpenBodyClass = "" //not used atm

const NavBar = ({app, navElements}:any) => {
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
    function jumpToRef(id:string){
        let targetElement = document.getElementById(id);
        if(targetElement != null){
            closeNav()
            targetElement.scrollIntoView({behavior: 'smooth'}); 
        }
    }

    return (
    <>
        <div className="navbar-open-btn">
            <div className='navbar-open-btn-shadow font-light-2' onClick={openNav}>
                <GiHamburgerMenu className='center-vh' />
            </div>
        </div>
        <div className={isOpened ? "navbar navbarOpen bg-dark" : "navbar"}>
            <ImCross className='closebtn font-light-1' onClick={closeNav}/>
            <div className='d-flex flex-column justify-content-evenly align-items-center' style={{height:"100%"}}>
                {
                    navElements.map((item:any, i:any) => 
                    {
                        return <div key={item.NavId} onClick={() => jumpToRef(item.NavId)}>{item.NavName}</div>}
                    )
                }
            </div>
        </div>
    </>
    )
}



export default NavBar;