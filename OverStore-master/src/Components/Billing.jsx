import AddBillModel from "../Layout/AddBillModel";
import BillingEntry from "../Container/BillingEntry";
import axios from "axios";
import API_BASE_URL from "../config";
import React, { useEffect, useState } from "react";

const Swal = require("sweetalert2");

const Billing = () => {
  const GetUrlData = async () => {
    // const data = await axios.get("https://fakestoreapi.com/products");
    const data = await axios.get(`${API_BASE_URL}/detail/customer`);
    setCustomerList(data.data.result);

    // console.log(data);
  };

  const GetProductData = async () => {
    // const data = await axios.get("https://fakestoreapi.com/products");
    const data = await axios.get(`${API_BASE_URL}/detail/product`);
    setProductList(data.data.result);

    // console.log(data);
  };

  const GetBillData = async () => {
    // const data = await axios.get("https://fakestoreapi.com/products");
    const formData = new FormData();
    formData.append("admin", localStorage.getItem("admin"));
    formData.append("id", localStorage.getItem("id"));
    axios
      .post(`${API_BASE_URL}/detail/bill`, formData, {
        headers: {
          Accept: "auth",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setBillList(response.data.result);
      });

    // console.log(data);
  };

  const [customerList, setCustomerList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [billList, setBillList] = useState([]);

  useEffect(() => {
    GetBillData();
    GetUrlData();
    GetProductData();
  }, []);

  return (
    <>
     <header className="header header-mini">
  <div className="header-title">Billing</div>
</header>

<div className="container">
  {!localStorage.getItem("admin") ||
  localStorage.getItem("admin") == 0 ||
  localStorage.getItem("admin") == "0" ? (
    ""
  ) : (
    <section className="section" id="product">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Add Bill
        </button>
      </div>
      <AddBillModel prod={customerList} m2={productList} />
    </section>
  )}
  <div className="container mt-5">
    <div className="table-responsive">
      <table className="table table-primary table-striped" id="myTable">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Total</th>
            <th>Bill Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <BillingEntry prod={billList} />
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  );
};
export default Billing;
