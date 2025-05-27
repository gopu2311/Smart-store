import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import API_BASE_URL from '../config';

const SingleBill = () => {
  const [billList, setBillList] = useState([]);
  const Razorpay = useRazorpay();

  useEffect(() => {
    // called after the first render
    async function fetchData() {
      const formData = new FormData();
      formData.append(
        "id",
        new URLSearchParams(window.location.search).get("id")
      );

      axios
        .post(`${API_BASE_URL}/detail/viewBillDetail`, formData, {
          headers: {
            // Accept: "auth",
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("data");
          setBillList(response.data.result);
        });
    }
    fetchData();
  }, []);

  const payNow = (e) => {
    const price = `${billList[0].Total}00`;

    const options = {
      key: "rzp_test_qDwTmKnksUVsaC", // Enter the Key ID generated from the Dashboard
      amount: Number(price), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: billList[0].CustomerName,
      description: "Test Transaction",
      // order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        console.log(response);
        const formData = {
          razorpay_payment_id: response.razorpay_payment_id,
          payment_status: "Success",

          id: billList[0].id,
        };
        const AddUserUrl = `${API_BASE_URL}/update/billStatus`;
        axios
          .post(AddUserUrl, formData, {
            headers: {
              Accept: "auth",
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            window.location.href = window.location.href;
          });
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.open();
  };
  return (
    <>
      <header className="header header-mini">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-title">Your Bill</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-3">
              <div className="row">
                <div className="col-md-4">
                  <img
                    className="card-img-top"
                    src={`${API_BASE_URL}/${
                      billList.length > 0 ? billList[0].ProductImage : ""
                    }`}
                    alt="Product"
                    height="200px"
                  />
                </div>
                <div className="col-md-8">
                  <h5>
                    <span>Customer Name: </span>
                    {billList.length > 0 ? billList[0].CustomerName : ""}
                  </h5>
                  <h5 className="mt-2">
                    <span>Product Name: </span>
                    {billList.length > 0 ? billList[0].ProductName : ""}
                  </h5>
                  <h5 className="mt-2">
                    <span>Product Description: </span>
                    {billList.length > 0 ? billList[0].ProductDescription : ""}
                  </h5>
                </div>
              </div>
              <div className="mt-2 mb-2">
                <hr />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>
                    <span>Price: </span>
                    {billList.length > 0 ? billList[0].ProductPrice : ""}
                  </h5>
                </div>
                <div className="col-md-4">
                  <h5>
                    <span>Quantity: </span>
                    {billList.length > 0 ? billList[0].ProductQuintity : ""}
                  </h5>
                </div>
                <div className="col-md-4">
                  <h5>
                    <span>Total: </span>
                    {billList.length > 0 ? billList[0].Total : ""}
                  </h5>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <span>
                    <small>Payment Status: </small>
                    {billList.length > 0 ? billList[0].payment_status : ""}
                  </span>
                </div>
                <div className="col-md-4">
                  <span>
                    <small>Payment ID: </small>
                    {billList.length > 0 ? billList[0].razorpay_payment_id : ""}
                  </span>
                </div>
                <div className="col-md-4">
                  {localStorage.getItem("admin") !== "1" &&
                  billList.length > 0 &&
                  !billList[0].razorpay_payment_id ? (
                    <button
                      className="btn btn-primary col-md-12"
                      onClick={payNow}
                    >
                      Pay Now
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleBill;
