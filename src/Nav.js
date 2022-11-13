import './Nav.css'
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function setTemporaryState(setter)
{
    setter(true);
    setTimeout(() => setter(false), 1000);
}

function getNavContainerCss(visible, showing, hiding)
{
    return 'navbar navbar-expand-lg navContainer mx-0' + (visible ? ' navContainerExpanded' : '') + (hiding || showing ? ' navContainerTransitioning' : '');
}

function getNavListCss(visible, showing, hiding)
{
    return 'collapse navbar-collapse navList' + (visible ? ' navListExpanded' : '') + (hiding ? ' navListClosing' : '');
}

function getNavLinkCss(visible, showing, hiding)
{
    return 'nav-link text-color' + (visible ? ' nav-link-open' : '') + (hiding ? ' nav-link-text-hiding' : '') + (showing ? ' nav-link-text-showing' : '');
}

export function Nav(){
    const[visible, setVisible] = useState(false);
    const[showing, setShowing] = useState(false);
    const[hiding, setHiding] = useState(false);

    function toggleNavBar()
    {
        const newVisible = !visible;
        if( newVisible )
        {
            document.getElementsByTagName('body')[0].classList.add('no-scroll');
            setTemporaryState(setShowing);
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('no-scroll');
            setTemporaryState(setHiding);
        }
        setVisible(newVisible);
    }

    return (
        <>
            <nav className = {getNavContainerCss(visible, showing, hiding)}>
                <button id = 'navButton' onClick ={toggleNavBar}
                        className="navbar-toggler" type="button">
                    <span id = 'myNavIcon' className="navbar-toggler-icon"></span>
                </button>

                <div className = {getNavListCss(visible, showing, hiding)}>
                    <div className = 'center-block'>
                        <NavLink to='/' onClick ={toggleNavBar} className={getNavLinkCss(visible, showing, hiding)}>01 Recent Projects</NavLink>
                        <NavLink to='/About'  onClick ={toggleNavBar} className={getNavLinkCss(visible, showing, hiding)} >02 About</NavLink>
                        <NavLink to= '/PastProjects' onClick ={toggleNavBar} className={getNavLinkCss(visible, showing, hiding)}>03 Past Projects</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

