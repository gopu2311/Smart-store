import React, { useState } from "react";
import CustomerEditModel from "../Layout/CustomerEditModel";
import API_BASE_URL from '../config';

// const handleClick = event => {
//   console.log(event.currentTarget.id);
// };
const ProductBox = ({ prod }) => {
  const image = prod.ProductImage;
  const title = prod.ProductName;
  const category = prod.ProductCategory;
  const quantity = prod.ProductQuintity;
  const id = prod.id;
  // const { image, title, price } = prod;

  return (
    <>
      {localStorage.getItem("admin") === "1" ? (
        <div className="col-md-4 mt-2">
          <img
            className="portfolio-card-img img-responsive rounded"
            src={`${API_BASE_URL}/${image}`}
            alt="Product"
            style={{ height: "300px" , width:"100%" }}
          />
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>{title}</h4>
              <p className="font-weight-normal">
                <h5>
                  {" "}
                  <span> Category :</span>
                  {category}
                </h5>
              </p>
            </span>
          </span>
          <CustomerEditModel quantity={quantity} id={id} />
        </div>
      ) : (
        <div className="col-md-4 mt-2">
          <img
            className="portfolio-card-img img-responsive rounded"
            src={`${API_BASE_URL}/${image}`}
            alt="Product"
            style={{ height: "300px" }}
          />
          <span className="portfolio-card-overlay">
            <span className="portfolio-card-caption">
              <h4>{title}</h4>
              <p className="font-weight-normal">
                <h5>
                  {" "}
                  <span> Category :</span>
                  {category}
                </h5>
              </p>
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default ProductBox;
