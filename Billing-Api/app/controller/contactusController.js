const con = require("../config/database");
const table = require("../config/tables");

exports.ContactUs = (req, res) => {
  const requestData = req.body;
  const sql =
    `INSERT INTO ${table.contactus} (CustomerNumber, CustomerName, CustomerMessage)` +
   ` VALUES ('${requestData.CustomerNumber}', '${requestData.CustomerName}', '${requestData.CustomerMessage}')`;
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
      message: "Conatct Request sent successfully",
      result: results,
    });
  });
};

