import React from "react";
import log from "../assets/log.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img src={log} alt="" className="footer__logo--img" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a href="/books" className="footer__link">
              Books
            </a>
            <a href="/cart" className="footer__link">
              Cart
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2023 &nbsp; Purple Library
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
