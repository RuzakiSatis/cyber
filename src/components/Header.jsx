import { Link } from "react-router-dom"
import "./Header.scss"
import React, { useState} from "react";

export const Header = () => {


    const [openBurger, setOpenBurger] = useState(false);

    const burderClick = () =>{
        setOpenBurger(!openBurger);
    };

    return(
        <header style={{height: openBurger ? "100%" : "10vh"}} className="header">
            <nav>
                <h1 className="header_title">CyberRift
                    <div className="header_title_aurora">
                        <div className="header_title_aurora__item"></div>
                        <div className="header_title_aurora__item"></div>
                        <div className="header_title_aurora__item"></div>
                        <div className="header_title_aurora__item"></div>
                    </div>
                </h1> 
            </nav>
            <nav>
                <img className="header_logo" src="/images/imgMain.png" alt="imgMain" />
            </nav>
            
            <div className="header_menu">
                <nav className="header_menu_Burger">
                    <span className={`header_menu_Burger_button ${openBurger ? 'open' : ''}`} onClick={burderClick}></span>
                </nav>
                <div style={{display: openBurger ? "block" : "none"}} className="header_menu_window">
                    <ul>
                        <li>
                            <Link className="header_menu_window_link">Home</Link>
                        </li>
                        <li>
                            <Link className="header_menu_window_link">About us</Link>
                        </li>
                        <li>
                            <Link className="header_menu_window_link">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="header_menu_window_link">News</Link>
                        </li>
                        <button className="header_menu_window_button header_menu_window_btn">Contact us</button>
                    </ul>
                </div>
                
                <ul className="header_menu_list">
                    <li >
                        <Link to="/Home" className="header_menu_list_link">Home</Link>
                    </li>
                    <li>
                        <Link className="header_menu_list_link">About us</Link>
                    </li>
                    <li>
                        <Link className="header_menu_list_link">Portfolio</Link>
                    </li>
                    <li>
                        <Link className="header_menu_list_link">News</Link>
                    </li>
                </ul>
                <button className="header_menu_button header_menu_btn">Contact us</button>
            </div>
            
        </header>
    )
}