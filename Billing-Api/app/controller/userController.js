const con = require("../config/database");
const table = require("../config/tables");
const utils = require("../common/utils");

exports.userLogin = async (req, res) => {
  utils.check_request_params(
    req.body,
    [
      { name: "CustomerEmail", type: "string" },
      { name: "CustomerPassword", type: "string" },
    ],
    function (response) {
      if (response.success) {
        const postData = req.body;
        const sql = `SELECT * FROM ${table.customer} WHERE CustomerEmail='${postData.CustomerEmail}'`;
        con.query(sql, async (err, results) => {
          if (err) {
            return res.status(401).send({
              success: false,
              message: `user not valid`,
              error: err,
            });
          }
          if (results.length > 0) {
            const pass = utils.cryptPassword(results[0].CustomerPassword);
            const checkPass = await utils.comparePassword(
              postData.CustomerPassword,
              pass,
              results[0]
            );
            // res.setHeader("auth", checkPass);
            return res.status(checkPass ? 200 : 400).send({
              success: checkPass ? true : false,
              status: checkPass ? 200 : 400,
              message: checkPass ? `Logged in succesfully` : "Invalid Password",
              result: checkPass ? results[0] : {},
              token: checkPass,
            });
          } else {
            return res.status(400).send({
              success: false,
              status: 400,
              message: "Invalid Email",
            });
          }
        });
      } else {
        res.json(response);
      }
    }
  );
};
exports.addCustomer = async (req, res) => {
  const checkEmail = `Select * from ${table.customer} Where CustomerEmail= '${req.body.CustomerEmail}'`
  con.query(checkEmail, (err, results) => {
    if(results.length >0){
      return res.status(400).json({
        success: false,
        message: `Email Already Register`,
      });
    }else{
      const sql =
      `INSERT INTO ${table.customer} (CustomerName, CustomerNumber, CustomerAddress, CustomerPassword, CustomerEmail)` +
      ` VALUES ('${req.body.CustomerName}', '${req.body.CustomerNumber}', '${req.body.CustomerAddress}','${req.body.CustomerPassword}', '${req.body.CustomerEmail}')`;
    con.query(sql, (err, results) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: `Server Internal error`,
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        status: 200,
        message: "Product Add successfully",
        result: results,
      });
    });
      
    }
  });

}
exports.GetCustomer = async (req, res) => {
  // const requestData = req.body;
  const sql = `SELECT * FROM ${table.customer} WHERE admin != 1`;
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
      message: "Customer detail",
      result: results,
    });
  });
};

exports.DeleteCustomer = async (req,res)=>{
  const sql = `DELETE FROM ${table.customer} WHERE id=${req.body.id}`;
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
      message: "Customer detail",
      result: results,
    });
  });
}


