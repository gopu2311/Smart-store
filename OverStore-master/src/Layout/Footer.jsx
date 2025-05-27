import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <p className="mb-0">
            Copyright 2023 &copy; <Link to="/">DevCRUD</Link>
          </p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-facebook"></i>
            </a>
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-twitter-alt"></i>
            </a>
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-google"></i>
            </a>
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-pinterest-alt"></i>
            </a>
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-instagram"></i>
            </a>
            <a href="#" className="link ml-1 mr-1">
              <i className="ti-rss"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
