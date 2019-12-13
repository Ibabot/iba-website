import React from 'react';
import './header.scss';
import logo from '../assets/img/isb-logo.svg';


function Header() {
    return (
      <header className="web-header" id="web-header">
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Íslandsbankinn logo" className="logo" />
        </div>
        <div
          className="web-header-text"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h1>Segðu halló við Íba</h1>
          <h2 className="bottom-space">
            <strong>Íba er snjallmenni Íslandsbanka.</strong>
          </h2>
          <h2>
            Íba getur svarað almennum spurningum og fyrirspurnum hér í
            spjallinu.
          </h2>
          <a
            data-testid="get-assistance"
            className="btn btn-red"
            href="https://www.islandsbanki.is/is/vara/thjonusta/hafa-samband"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hafðu samband við þjónustuver bankans
          </a>
          <p>
            Ég er líka á{" "}
            <a
              data-testid="open-facebook"
              href="https://www.messenger.com/t/iba.spjallmenni"
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
      </header>
    );
}

export default Header;