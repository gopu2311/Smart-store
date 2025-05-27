import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import API_BASE_URL from "../config";

const CustomerEditModel = ({ quantity, id }) => {
  const [editingQuantity, setEditingQuantity] = useState(false);
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [productid, setProductid] = useState(id);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", productid);
    formData.append("quantity", productQuantity);
    const updateProductUrl = `${API_BASE_URL}/update/productQuantity`;
    axios
      .post(updateProductUrl, formData, {
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
            title: "Quantity updated successfully",
            showConfirmButton: true,
          });
          setEditingQuantity(false);
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

  const handleDeleteProduct = async () => {
    console.log("Deleting product with ID:", productid);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const deleteProductUrl = `${API_BASE_URL}/${productid}`;
        console.log("Delete URL:", deleteProductUrl);
        const response = await axios.delete(deleteProductUrl);

        console.log("Delete response:", response.data);

        if (response.data.success === true) {
          Swal.fire({
            icon: "success",
            title: "Product deleted successfully",
            showConfirmButton: true,
          });
          window.location.reload();

          // Redirect or perform any other action after deletion
        }
      } catch (err) {
        console.error("Error deleting product:", err);
        Swal.fire({
          icon: "error",
          title: "Error deleting product",
          text: err.response.data.message || "An error occurred",
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <>
      {!editingQuantity ? (
        <>
          <h2>{quantity}</h2>
          <button
            className="btn btn-primary"
            onClick={() => setEditingQuantity(true)}
          >
            Edit Quantity
          </button>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="col-md-6 mt-2 ml-auto mr-auto">
            <input
              type="number"
              className="form-control"
              name="quantity"
              placeholder="Enter Quantity"
              value={productQuantity}
              min={1}
              onChange={(e) => {
                setProductQuantity(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm mt-2">
            Update Quantity
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mt-2 mx-2"
            onClick={handleDeleteProduct}
          >
            Delete Product
          </button>
        </form>
      )}
    </>
  );
};

export default CustomerEditModel;
