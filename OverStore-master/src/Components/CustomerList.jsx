import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductBox from "../Container/ProductBox";
import CustomersList from "../Container/CustomersList";
import API_BASE_URL from '../config';


const Swal = require("sweetalert2");

const CustomerList = () => {
    const navigate = useNavigate()
    const [CustomerDetail, setCustomerDetail] = React.useState("");
    const [billList, setBillList] = useState([]);

    const GetCustomerData = async () => {
        // const data = await axios.get("https://fakestoreapi.com/products");
        const data = await axios.get(`${API_BASE_URL}/detail/customer`);
        setBillList(data.data.result);
          
        // console.log(data);
    };
    useEffect(() => {
        GetCustomerData();
    }, []);

    return (
        <>
       <header className="header header-mini">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="header-title">Customer List</div>
            </div>
        </div>
    </div>
</header>

<div className="container mt-5">
    <div className="table-responsive">
        <table className="table table-primary table-striped" id="myTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <CustomersList prod={billList} />
            </tbody>
        </table>
    </div>
</div>

        </>
    );
};
export default CustomerList;

