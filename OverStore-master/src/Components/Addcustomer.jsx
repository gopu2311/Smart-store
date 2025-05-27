import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductBox from "../Container/ProductBox";
import API_BASE_URL from "../config";
const Swal = require("sweetalert2");

const AddCustomer = () => {
  const navigate = useNavigate()

  const [CustomerEmail, setEmail] = React.useState("");
  const [CustomerPassword, setPassword] = React.useState("");
  const [CustomerName, setName] = React.useState("");
  const [CustomerNumber, setNumber] = React.useState("");
  const [CustomerAddress, setAddress] = React.useState("");
  const [CustomerDetail, setCustomerDetail] = React.useState("");

  const GetCustomerData = async () => {
    // const data = await axios.get("https://fakestoreapi.com/products");
    const data = await axios.get(`${API_BASE_URL}/detail/customer`);
    setCustomerDetail(data.data.result);

    // console.log(data);
  };
  useEffect(() => {
    GetCustomerData();
  }, []);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (
      CustomerEmail === "" ||
      CustomerPassword === "" ||
      CustomerNumber === "" ||
      CustomerAddress === "" ||
      CustomerName === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Enter Valid Details",
        showConfirmButton: true,
      });
      return false;
    }
    const userData = {
      CustomerEmail: CustomerEmail,
      CustomerPassword: CustomerPassword,
      CustomerNumber: CustomerNumber,
      CustomerName: CustomerName,
      CustomerAddress: CustomerAddress,
    };
    // console.log(userData);

    const AddUserUrl = `${API_BASE_URL}/add_user`;
    axios
      .post(AddUserUrl, JSON.stringify(userData), {
        headers: {
          Accept: "auth",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          window.location.href = window.location.href
          Swal.fire({
            icon: "success",
            title: "Customer add successfully",
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
     <header className="header header-mini">
  <div className="header-title">Add Customer</div>
</header>
<div className="container mt-5 mb-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form onSubmit={handleSubmitClick}>
        <div className="row">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Customer Name"
              value={CustomerName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <input
              type="number"
              className="form-control"
              name="number"
              placeholder="Customer Number"
              value={CustomerNumber}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={CustomerPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={CustomerEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Customer Address"
              value={CustomerAddress}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-2">
            <button type="submit" className="btn btn-primary w-100">
              Add Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

      
    </>
  );
};
export default AddCustomer;
