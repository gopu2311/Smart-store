import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from '../config';
const Swal = require("sweetalert2");

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const userData = {
      CustomerEmail: email,
      CustomerPassword: password,
    };
    // console.log(userData);

    const LoginUrl = `${API_BASE_URL}/user_login`;
    axios
      .post(LoginUrl, JSON.stringify(userData), {
        headers: {
          Accept: "auth",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login = response.data;
        if (login.success === true) {
          localStorage.removeItem("email", login.result.CustomerEmail);
          localStorage.removeItem("id", login.result.id);
          localStorage.removeItem("admin", login.result.admin);
          localStorage.setItem("email", login.result.CustomerEmail);
          localStorage.setItem("id", login.result.id);
          localStorage.setItem("admin", login.result.admin);
          navigate("/");
          window.location.href = window.location.href;
        } else {
          localStorage.removeItem("email", login.result.CustomerEmail);
          localStorage.removeItem("id", login.result.id);
          localStorage.removeItem("admin", login.result.admin);
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
        <div className="header-title">Login</div>
      </header>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <form onSubmit={handleSubmitClick}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
