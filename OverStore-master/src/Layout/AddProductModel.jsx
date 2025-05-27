import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from '../config';
const Swal = require("sweetalert2");


const AddProductModel = () => {
  const navigate = useNavigate();

  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductQuintity, setProductQuintity] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [ProductImage, setProductImage] = useState({
    file: [],
  });
  const [files, setFiles] = useState([]);
  const handleimginput = (e) => {
    setProductImage({
      ...ProductImage,
      file: e.target.files,
      // filepreview: URL.createObjectURL(e.target.files[0]),
    });
    setFiles(e.target.files);
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (
      ProductCategory === "" ||
      ProductDescription === "" ||
      files.length <= 0 ||
      ProductName === "" ||
      ProductPrice === "" ||
      ProductQuintity === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    // console.log(userData);
    const formData = new FormData();
    formData.append("ProductImage", files[0]);
    formData.append("ProductName", ProductName);
    formData.append("ProductDescription", ProductDescription);
    formData.append("ProductPrice", ProductPrice);
    formData.append("ProductQuintity", ProductQuintity);
    formData.append("ProductCategory", ProductCategory);

    const AddUserUrl = `${API_BASE_URL}/add/product`;
    axios
      .post(AddUserUrl, formData, {
        headers: {
          Accept: "auth",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          window.location.href = window.location.href;
          Swal.fire({
            icon: "success",
            title: "Product add successfully",
            showConfirmButton: true,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: err.response.data.message,
          showConfirmButton: true,
        });
      });
  };
  return (
    <>
      <div
        className="modal"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Product Form
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitClick}>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      name="ProductName"
                      placeholder="Product Name"
                      value={ProductName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mt-2">
                    <select
                      className="form-control"
                      value={ProductCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                    >
                      <option>Product Category</option>
                      <option>FOOD</option>
                      <option>CLEANING & HOUSEHOLD</option>
                      <option>PERSONAL CARE</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <input
                      type="number"
                      className="form-control"
                      name="Price"
                      placeholder="Price"
                      value={ProductPrice}
                      min={1}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mt-2">
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      min={1}
                      placeholder="Enter Quantity"
                      value={ProductQuintity} // Corrected typo here
                      onChange={(e) => setProductQuintity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Product Description"
                      value={ProductDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <input
                      type="file"
                      className="form-control-file"
                      name="product image"
                      onChange={handleimginput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <button type="submit" className="btn btn-primary mt-2">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModel;
