import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import API_BASE_URL from '../config';

const Swal = require("sweetalert2");

const AddBillModel = ({ prod, m2 }) => {
  const Razorpay = useRazorpay();

  const productChange = (e) => {
    setProductId(e.target.value);
    setProductPrice(
      e.target.childNodes[e.target.selectedIndex].getAttribute("price")
    );
    setProductName(
      e.target.childNodes[e.target.selectedIndex].getAttribute("name")
    );
    setProductDescription(
      e.target.childNodes[e.target.selectedIndex].getAttribute("description")
    );
  };
  const customerChange = (e) => {
    setCustomerName(e.target.value);
    setCustomerId(
      e.target.childNodes[e.target.selectedIndex].getAttribute("cust_id")
    );
  };

  let customerList = prod.map((item, i) => {
    return (
      <option key={i} value={item.CustomerName} cust_id={item.id}>
        {item.CustomerName}
      </option>
    );
  }, this);

  let productList = m2.map((item, i) => {
    return (
      <option
        name={item.ProductName}
        price={item.ProductPrice}
        value={item.id}
        description={item.ProductDescription}>
        {item.ProductName}
      </option>
    );
  }, this);
  const [ProductPrice, setProductPrice] = React.useState("");
  const [CustomerName, setCustomerName] = React.useState("");
  const [CustomerId, setCustomerId] = React.useState("");

  const [ProductQuantity, setProductQuantity] = React.useState("");
  const [PoductId, setProductId] = React.useState("");
  const [PoductName, setProductName] = React.useState("");
  const [PoductDescription, setProductDescription] = React.useState("");
  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (
      PoductName === "" ||
      ProductPrice === "" ||
      ProductQuantity === "" ||
      PoductDescription === "" ||
      CustomerName === ""
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
    formData.append("ProductId", PoductId);
    formData.append("ProductName", PoductName);
    formData.append("ProductPrice", ProductPrice);
    formData.append("ProductQuantity", ProductQuantity);
    formData.append("CustomerName", CustomerName);
    formData.append("CustomerId", CustomerId);
    formData.append("PoductDescription", PoductDescription);
    const AddUserUrl = `${API_BASE_URL}/add/bill`;
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
            title: "Bill add successfully",
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
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Billing From
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitClick}>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <select className="form-control" onChange={customerChange}>
                      <option>Customer Name</option>
                      {customerList}
                    </select>
                  </div>
                  <div className="col-md-6 mt-2">
                    <select className="form-control" onChange={productChange}>
                      <option>Product Name</option>
                      {productList}
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
                      readOnly="true"
                      value={ProductPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mt-2">
                    <input
                      type="number"
                      className="form-control"
                      name="quntity"
                      placeholder="Enter Quntity"
                      min={1}
                      value={ProductQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Add Bill
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBillModel;
