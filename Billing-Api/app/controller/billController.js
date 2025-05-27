const con = require("../config/database");
const table = require("../config/tables");
const utils = require("../common/utils");

exports.AddBill = async (req, res) => {
    const requestData = req.body;
    const getData1 = `Select * from ${table.product} where id=${requestData.ProductId}`;
    con.query(getData1, (err, getData) => {
        if (getData.length > 0) {
            if (Number(getData[0].ProductQuintity) >= Number(requestData.ProductQuantity)) {
                requestData.Total = requestData.ProductQuantity * requestData.ProductPrice;
                const quantity = Number(getData[0].ProductQuintity) - Number(requestData.ProductQuantity);
                const updateSql = `UPDATE ${table.product} SET ProductQuintity = ${quantity} Where id=${requestData.ProductId}`
                con.query(updateSql, (err, resultsq) => {
                  if (err) {
                    return res.status(400).json({
                        success: false,
                        message: `Server Internal error`,
                        error: err,
                    });
                }
                const sql =
                    `INSERT INTO ${table.bill} (payment_status,CustomerId,ProductDescription,CustomerName, ProductName, ProductPrice, ProductQuintity, Total)` +
                    ` VALUES ('${"Pending"}','${requestData.CustomerId}','${requestData.PoductDescription}','${requestData.CustomerName}','${requestData.ProductName}', '${requestData.ProductPrice}', '${requestData.ProductQuantity}', '${requestData.Total}')`;
                con.query(sql, (err, results) => {
                    if (err) {
                        return res.status(400).json({
                            success: false,
                            message: `Server Internal error`,
                            error: err,
                        });
                    }
                    const sql2 = `SELECT * FROM ${table.bill} WHERE id=${results.insertId}`;
                    con.query(sql2,(err,resultw)=>{
                      return res.status(200).json({
                        success: true,
                        status: 200,
                        message: "Product Add successfully",
                        result: resultw,
    
                    });
                    })
                    
                });
            
              });
                
              }else{
                return res.status(400).json({
                    success: false,
                    message: `No more quantity to add`,
                    error: err,
                });
        
            }
        }
    });
    

};
exports.BillDetail = async (req, res) => {
    // const requestData = req.body;
    let sql;
    if(req.body.admin== 1 ||req.body.admin== '1' ){
         sql = `SELECT * FROM ${table.bill} ORDER BY id desc`;
    
    }else{
      sql = `SELECT * FROM ${table.bill} where CustomerId=${req.body.id} ORDER BY id desc`;
    
    }
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).send({
        success: true,
        status: 200,
        message: "Bill detail",
        result: results,
      });
    });
  };
  
  exports.ViewBillDetail = async (req, res) => {
    // const requestData = req.body;
    let sql;
      sql = `SELECT bill.*,product.ProductImage FROM ${table.bill} INNER JOIN ${table.product} ON product.ProductName=bill.ProductName where bill.id=${req.body.id} ORDER BY id desc`;
    
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).send({
        success: true,
        status: 200,
        message: "Bill detail",
        result: results,
      });
    });
  };
  exports.BillStatus = async (req, res) => {
    // const requestData = req.body;
    let sql;
      sql = `UPDATE ${table.bill} SET payment_status="${req.body.payment_status}",razorpay_payment_id="${req.body.razorpay_payment_id}" WHERE id="${req.body.id}"`; 
    
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).send({
        success: true,
        status: 200,
        message: "Bill detail",
        result: results,
      });
    });
  };

