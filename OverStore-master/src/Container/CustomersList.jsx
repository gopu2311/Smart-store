import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomerEditModel from "../Layout/CustomerEditModel";
import API_BASE_URL from '../config';


const CustomersList = ({prod}) => {
  const deleteCustomer = async (id) => {
    const formData = new FormData();
    formData.append('id', id);
    axios.post(`${API_BASE_URL}/delete/customer`, formData, {
      headers: {
        Accept: "auth",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        // setBillList(response.data.result);
        window.location.href = window.location.href;
      });
  
    // console.log(data);
  };    
  let billList =  prod.map((item, i) => {
    
    return <tr>
      <td >{item.id}</td>
              <td >{item.CustomerName}</td>
              <td >{item.CustomerNumber}</td>
              <td >{item.CustomerEmail}</td>
              <td >{item.CustomerAddress}</td>
              <td ><button className="btn btn-danger" onClick={(e)=>deleteCustomer(item.id)}>
                  Delete
                </button>&nbsp;&nbsp;
                {/* <><button className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter">
                  Update
                </button><CustomerEditModel data = {item}/></> */}
                </td>
              {/* <td >{item.Total}</td>
              <td >{item.BillDate}</td>
              <td ><Link to={`/singlebill?id=${item.id}`}>
                  <i className="ti-eye"></i>
                </Link></td> */}
             </tr>
          }, this);
          return (
    <>
      {billList}
    </>
  );
};

export default CustomersList;
