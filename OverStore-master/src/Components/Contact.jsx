import axios from "axios";
import React from "react";
import API_BASE_URL from '../config';
import { Link, useNavigate } from "react-router-dom";
const Swal = require("sweetalert2");
const Contact = () => {
  const [CustomerName, setCustomerName] = React.useState("");
  const [CustomerNumber, setCustomerNumber] = React.useState("");
  const [CustomerMessage, setCustomerMessage] = React.useState("");
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (
      CustomerMessage === "" ||
      CustomerNumber === "" ||
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
    formData.append("CustomerMessage", CustomerMessage);
    formData.append("CustomerNumber",CustomerNumber);
    formData.append("CustomerName", CustomerName);
    const AddUserUrl = `${API_BASE_URL}/add/contactus`;
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
            title: "Request Sent  successfully",
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
      <header id="home" className="header">
        <section className="section text-white" id="contact">
          <div className="container text-center">
            <h6 className="section-title mb-5">Contact Me</h6>
            <form onSubmit={handleSubmitClick} className="contact-form col-md-10 col-lg-8 m-auto">
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <input
                    type="number"
                    size="50"
                    className="form-control input_form"
                    placeholder="Your Number"
                    value={CustomerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value)}
                  />
                </div>
                <div className="form-group col-sm-6">
                  <input
                    type="text"
                    className="form-control input_form"
                    placeholder="Enter Name"
                    value={CustomerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <textarea
                    name="comment"
                    id="comment"
                    rows="6"
                    className="form-control input_form"
                    placeholder="Write Something"
                    value={CustomerMessage}
                      onChange={(e) => setCustomerMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group col-sm-12 mt-3">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-outline-primary rounded"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </header>
    </>
  );
};
export default Contact;
