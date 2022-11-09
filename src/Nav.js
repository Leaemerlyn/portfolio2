import './Nav.css'
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function addTemporaryClass( domElement, className )
{
    domElement.classList.add(className);
    setTimeout(() => {domElement.classList.remove(className)}, 1000);
}

export function Nav(){
    const[visible, setVisible] = useState(false);
    return (
        <>
            <nav className = 'navbar navbar-expand-lg navContainer mx-0'>
                <button id = 'navButton' onClick ={
                    ()=> {
                        const newVisible = !visible;
                        if( newVisible )
                        {
                            document.getElementsByTagName('body')[0].classList.add('no-scroll');
                        }
                        else {
                            document.getElementsByTagName('body')[0].classList.remove('no-scroll');
                        }
                        setVisible(newVisible);
                            const navContainer = document.getElementsByClassName('navContainer')[0];
                            navContainer.classList.toggle('navContainerExpanded');
                            const navList = document.getElementsByClassName('navList')[0];
                            addTemporaryClass(navContainer, 'navContainerTransitioning');
                            if( !newVisible ) {
                                addTemporaryClass(navList, 'navListClosing');
                            }
                            navList.classList.toggle('navListExpanded');
                            const navLinks = document.getElementsByClassName
                            ('nav-link');
                            for( let link of navLinks ) {
                                link.classList.toggle("nav-link-open");
                                if( newVisible ) {
                                    addTemporaryClass(link, 'nav-link-text-showing');
                                }
                                else {
                                    addTemporaryClass(link, 'nav-link-text-hiding');
                                }
                            }
                        }}
                        className="navbar-toggler" type="button">
                    <span id = 'myNavIcon' className="navbar-toggler-icon"></span>
                </button>

                <div className = 'collapse navbar-collapse navList'>
                    <div className = 'center-block'>
                        <NavLink to='/' className="nav-link active text-color">01 Recent Projects</NavLink>
                        <a className="nav-link text-color" href="#">02 About</a>
                        <a className="nav-link text-color" href="#">03 Past Projects</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

