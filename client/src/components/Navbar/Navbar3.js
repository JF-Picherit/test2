
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faHeart, faBell, faCommentDots, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import * as actionType from '../../constants/actionTypes';
import logo from '../../images/monCamionIcon.png';

const Navbar3 = () => {

    const [sidenavVisible, setSidenavVisible] = useState(false);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/auth');
  
      setUser(null);
    };

    const annonce = () => {
        history.push('/annonce');
    }
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const getElementByXpath = (path) => {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    const handleClick = () => {

        var hamburger = getElementByXpath("//*[@id='hamburger']");
        var sidenav = getElementByXpath("//*[@id='mySidenav']");
        var menuoverlay = getElementByXpath("//*[@id='menu-overlay']");

        if(!sidenavVisible) 
        {
           sidenav.classList.add("show");
           hamburger.classList.add("close");
           menuoverlay.classList.add("active");
           document.addEventListener('click', handleOutsideClick, false);
           setSidenavVisible(true);
        } 
        else 
        {
          document.removeEventListener('click', handleOutsideClick, false);
          sidenav.classList.remove("show");
          hamburger.classList.remove("close");
          menuoverlay.classList.remove("active");
          setSidenavVisible(false);
        }
    };

    const handleOutsideClick = (e) => {
        var hamburger = getElementByXpath("//*[@id='hamburger']");
        var element = getElementByXpath("//*[contains(@class, '" + e.target.className + "')]");
        if (element && !hamburger) {
          return;
        } 
    };

    const sidebarClick = () => {
        getElementByXpath("//*[@id='mySidenav']").addEventListener("click", function(event){
            event.stopPropagation()
        })
    };

    // const navbarScroll = () => {
    //     window.addEventListener('scroll', function() {
    //        var header = document.getElementById("main-header");   
    //         if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) 
    //         {
    //             header.classList.add("minimize");
    //         } 
    //         else 
    //         {
    //             header.classList.remove("minimize");
    //         }  
    //     });
    // };

    return (
        <header className="main-header" id="main-header" ref={node => {node = node;}} >
            <div className="hamburger-wrapper">
                <button type="button" className="hamburger" id="hamburger" onClick={handleClick}>
                    <span className="hamburger-text-wrap">
                        <span className="hamburger-text-open hamburger-text">menu</span>
                        <span className="hamburger-text-close hamburger-text">close</span>    
                    </span>
                    <span className="hamburger-line-wrap">
                    <span className="hamburger-line hamburger-line-1"></span>
                    <span className="hamburger-line hamburger-line-2"></span>
                    <span className="hamburger-line hamburger-line-3"></span>   
                    </span>     
                </button> 
            </div>        
            <div className="container" id="myConrainerNav">
                <div className="logo-and-menu-container">    
                    <div id="menu-overlay"></div>
                    <div className="logo-column"><div className="logo-wrapper">
                        <div className="header-logo logo-image">
                            <img id="iconNavBar" src={logo} alt="logo"></img> 
                        </div>
                    </div>
                </div>
                <div className="menu-column">
                    <div className="standard-menu-container">
                        <nav>
                            <div className="sidenav-container" id="mySidenav" onMouseOver={sidebarClick}>
                                <div className="sidenav-container-inner">
                                    <ul>
                                        <li className="menu-item"><a href="#"><FontAwesomeIcon icon={faBell} /> Mes recherches</a></li>
                                        <li className="menu-item"><a href=""><FontAwesomeIcon icon={faHeart} /> Favoris</a></li>
                                        <li className="menu-item"><a href=""><FontAwesomeIcon icon={faCommentDots} /> Messages</a></li>
                                        <li className="menu-item">
                                            <a href="#" onClick={logout}><FontAwesomeIcon icon={faUser} />
                                                {user?.result ? (
                                                        ' Se déconnecter'
                                                ) : (
                                                        ' Se connecter'
                                                )}
                                            </a>
                                        </li>
                                        <li className="menu-item"><a onClick={annonce}><FontAwesomeIcon icon={faPlusSquare} /> Déposer une annonce</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="menu-main" className="menu-main">
                                <ul>
                                    <li className="menu-item navCenter">
                                        <a className="containerIconNavbar">
                                            <div className="iconsNavbar">
                                                <FontAwesomeIcon icon={faBell} />
                                            </div>
                                            <div>
                                                Mes recherches
                                            </div>
                                        </a>
                                    </li>
                                    <li className="menu-item navCenter">
                                        <a className="containerIconNavbar">
                                            <div className="iconsNavbar">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                            <div>
                                                Favoris
                                            </div>
                                        </a>
                                    </li>
                                    <li className="menu-item navCenter">
                                    <a className="containerIconNavbar">
                                        <div className="iconsNavbar">
                                            <FontAwesomeIcon icon={faCommentDots} />
                                        </div>
                                        <div>
                                            Messages
                                        </div>
                                    </a>
                                    </li>
                                    <li className="menu-item navCenter">
                                    <a className="containerIconNavbar" onClick={logout}>
                                        <div className="iconsNavbar">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <div>
                                            {user?.result ? (
                                                    'Se déconnecter'
                                            ) : (
                                                    'Se connecter'
                                            )}
                                        </div>
                                    </a>
                                    </li>
                                    <li className="menu-item"><button id="annonceButton" onClick={annonce}><FontAwesomeIcon icon={faPlusSquare} /> Déposer une annonce</button></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> 
            </div>
        </header>
    );


};

export default Navbar3;