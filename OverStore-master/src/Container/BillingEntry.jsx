import React from "react";
import { Link } from "react-router-dom";

const BillingEntry = ({prod}) => {
  
  let billList =  prod.map((item, i) => {
    
    return <tr>
      <td >{item.CustomerName}</td>
      <td >{item.ProductName}</td>
      <td >{item.ProductPrice}</td>
      <td >{item.ProductQuintity}</td>
      <td >{item.Total}</td>
      <td >{item.BillDate}</td>
      <td ><Link to={`/singlebill?id=${item.id}`}>
          <i className="ti-eye"></i>
        </Link></td>
     </tr>
  }, this);
  return (
    <>
      {billList}
    </>
  );
};

export default BillingEntry;
