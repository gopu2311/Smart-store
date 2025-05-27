const con = require("../config/database");
const table = require("../config/tables");
const utils = require("../common/utils");

exports.AddProduct = async (req, res) => {
  const requestData = req.body;
  var image_file = req.files;

  if (image_file != undefined && image_file.length > 0) {
    var image_name = req.files[0].originalname;
    var url =
      utils.getStoreImageFolderPath(FOLDER_NAME.USER_PROFILES) + image_name;
    requestData.ProductImage = url;
    utils.storeImageToFolder(
      image_file[0].path,
      image_name,
      FOLDER_NAME.USER_PROFILES
    );
  }
  const sql =
    `INSERT INTO ${table.product} (ProductImage, ProductName, ProductDescription, ProductPrice, ProductQuintity, ProductCategory)` +
    ` VALUES ('${requestData.ProductImage}','${requestData.ProductName}', '${requestData.ProductDescription}', '${requestData.ProductPrice}', '${requestData.ProductQuintity}', '${requestData.ProductCategory}')`;
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
};

exports.DeleteProduct = async (req, res) => {
  const sql = `DELETE FROM ${table.product} where id = ${req.params.id}`;
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
      message: "Product Deleted Successfully",
    });
  });
};

exports.ProductDetail = async (req, res) => {
  // const requestData = req.body;
  const sql = `SELECT * FROM ${table.product}`;
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
      message: "Product detail",
      result: results,
    });
  });
};

exports.UpdateQuantity = async (req, res) => {
  const sql1 = `SELECT ProductQuintity FROM ${table.product} WHERE id=${req.body.id}`;
  con.query(sql1, (err, results) => {
    const sql = `UPDATE  ${table.product} SET ProductQuintity = ${Number(
      req.body.quantity
    )} WHERE id=${req.body.id}`;
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
        message: "Product detail",
        result: results,
      });
    });
  });
};
