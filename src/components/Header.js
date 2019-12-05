import React from 'react';
import './header.scss';
import logo from '../assets/img/isb-logo-red.svg';


function Header() {
    return (
      <header className="web-header">
        <div className="logo">
          <img src={logo} alt="Íslandsbankinn logo" className="logo" />
        </div>
        <div className="web-header-text">
          <h1>Say hello to Íba</h1>
          <p className="bottom-space">
            Íba is Íslandsbanki's new chatbot assistant
          </p>
          <a
            className="btn btn-red"
            href="https://www.islandsbanki.is/is/vara/thjonusta/hafa-samband"
            target="_blank"
          >
            Be in touch
          </a>
        </div>
      </header>
    );
}

export default Header;

{/* <a href="https://www.freepik.com/free-photos-vectors/technology">
  Technology vector created by upklyak - www.freepik.com
</a>; */}