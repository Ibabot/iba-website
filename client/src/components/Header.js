import React from 'react';
import './header.scss';
import logo from '../assets/img/isb-logo.svg';


function Header() {
    return(
        <header className="web-header">
            <div className="logo">
                <img src={logo} alt="Íslandsbankinn logo" className="logo" />
            </div>            
            <input type="text" className="input"></input>
        </header>
    )
}

export default Header;
