import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  
  return (
    <>
      <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Shopkeeper</span>
          </h1>
          <p className="header-subtitle">Businessperson </p>

        </div>
      </header>
      <section className="section pt-0" id="about">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder">
              <img
                src={require("../assets/imgs/man.png")}
                className="about-img"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
              />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae aliquid ad provident aut fuga animi soluta quae eos
                non cupiditate voluptates dolorem, doloremque quos dicta
                quibusdam impedit iure nemo a iste
                <br />
                culpa! Quasi quibusdam hic recusandae delectus velit officiis
                explicabo voluptatibus! Nemo esse similique, voluptates labore
                distinctio, placeat explicabo facilis molestias, blanditiis
                culpa iusto voluptatem ratione eligendi a, quia temporibus velit
                vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="container text-center">
          <h6 className="section-title mb-6">Product</h6>
          <div className="row">
            <div className="col-md-4">
              <Link to="/product" className="portfolio-card">
                <img
                  src={require("../assets/imgs/folio-1.gif")}
                  className="portfolio-card-img"
                  alt="Product"
                  height={"200px"}
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>FOOD</h4>
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/product" className="portfolio-card">
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src={require("../assets/imgs/houseclean.gif")}
                  alt="Product"
                  height={"200px"}
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>CLEANING & HOUSEHOLD</h4>
                  </span>
                </span>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/product" className="portfolio-card">
                <img
                  className="portfolio-card-img img-responsive rounded"
                  src={require("../assets/imgs/folio-3.gif")}
                  alt="Product"
                  height={"200px"}
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>PERSONAL CARE</h4>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="pricing">
        <div className="container text-center">
          <h6 className="section-title mb-6">Services</h6>
          <div className="pricing-wrapper">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img
                  className="pricing-card-icon"
                  src={require("../assets/imgs/scooter.png")}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">Free Delivery</h6>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img
                  className="pricing-card-icon"
                  src={require("../assets/imgs/24-7.png")}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">24 / 7 Customer Support </h6>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <img
                  className="pricing-card-icon"
                  src={require("../assets/imgs/recent.png")}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="pricing-card-body">
                <h6 className="pricing-card-title">See All Recent Bills</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm bg-primary">
        <div className="container text-center text-sm-left">
          <div className="row align-items-center">
            <div className="col-sm offset-md-1 mb-4 mb-md-0">
              <h6 className="title text-light">What to order here ?</h6>
              <p className="m-0 text-light">
                Always feel Free to Contact & Hire me
              </p>
            </div>
            <div className="col-sm offset-sm-2 offset-md-3">
              <Link
                to="/contact"
                className="btn btn-lg my-font btn-light rounded"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
