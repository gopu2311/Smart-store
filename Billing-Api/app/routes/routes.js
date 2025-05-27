const express = require("express");
const router = express.Router();

const auth = require("../config/auth");
const UserController = require("../controller/userController");
const ProductController = require("../controller/productController");
const BillController = require("../controller/billController");
const ContactController = require("../controller/contactusController");

//login
router.post("/user_login", UserController.userLogin);
router.get("/detail/customer", UserController.GetCustomer);
router.post("/delete/customer", UserController.DeleteCustomer);

router.post("/add_user", UserController.addCustomer);
router.post("/add/contactus", ContactController.ContactUs);

//product
router.post("/add/product", ProductController.AddProduct);
router.get("/detail/product", ProductController.ProductDetail);
router.post("/update/productQuantity", ProductController.UpdateQuantity);
router.delete("/delete/:id", ProductController.DeleteProduct);

//Bill
router.post("/add/bill", BillController.AddBill);
router.post("/update/billStatus", BillController.BillStatus);

router.post("/detail/bill", BillController.BillDetail);
router.post("/detail/viewBillDetail", BillController.ViewBillDetail);

module.exports = router;
