import ProductBox from "../Container/ProductBox";
import AddProductModel from "../Layout/AddProductModel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import API_BASE_URL from '../config';

const Swal = require("sweetalert2");

const Product = () => {
  const GetUrlData = async () => {
    const data = await axios.get(`${API_BASE_URL}/detail/product`);
    setProductList(data.data.result);
  };

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    GetUrlData();
  }, []);

  return (
    <>
      <section className="section" id="product">
        <div className="container text-center">
          <h6 className="section-title mb-6">Product</h6>
          {!localStorage.getItem("admin") ||
          localStorage.getItem("admin") == 0 ||
          localStorage.getItem("admin") == "0" ? (
            ""
          ) : (
            <>
              <button
                type="button"
                className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter">
                Add Product
              </button>
              <AddProductModel />
            </>
          )}

          <div className="row mb-1 mt-1">
            {productList.map((prod) => (
              <ProductBox prod={prod} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
