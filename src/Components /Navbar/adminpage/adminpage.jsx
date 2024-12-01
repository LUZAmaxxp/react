import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [imageFile, setImageFile] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setNewProduct({ name: "", price: "" });
      setImageFile(null);
      setIsAdding(false);
      showToast("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      showToast("Failed to add product", "error");
    }
  };

  const handleEditProduct = async (id) => {
    const formData = new FormData();
    formData.append("name", editingProduct.name);
    formData.append("price", editingProduct.price);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? response.data : product
        )
      );
      setEditingProduct(null);
      setImageFile(null);
      showToast("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      showToast("Failed to update product", "error");
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      showToast("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      showToast("Failed to delete product", "error");
    }
  };

  const handlePromoteUser = async (id, newRole) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/auth/promote-user/${id}`,
        { role: newRole }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, role: newRole } : user
        )
      );
      showToast(`User promoted to ${newRole}`);
    } catch (error) {
      console.error("Error promoting user:", error);
      showToast("Failed to promote user", "error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <ToastContainer />
      <header className="bg-purple-700 p-6 text-white text-center font-bold text-2xl">
        TECLift Admin Panel
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white p-6">
          <h2 className="text-lg font-semibold mb-6">Admin Controls</h2>
          <ul className="space-y-4">
            <li
              onClick={() => setIsAdding(true)}
              className="hover:bg-purple-700 p-3 rounded-md cursor-pointer transition duration-200 ease-in-out"
            >
              Add New Product
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-8 bg-gray-50">
          <h2 className="text-3xl font-bold mb-8">Product Management</h2>
          {/* Product Management Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
              >
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* User Management Section */}
          <h2 className="text-3xl font-bold mt-12 mb-8">User Management</h2>
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Role</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="py-2 px-4">{user.username}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.role}</td>
                    <td className="py-2 px-4">
                      {user.role !== "admin" && (
                        <button
                          onClick={() => handlePromoteUser(user._id, "admin")}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                          Promote to Admin
                        </button>
                      )}
                      {user.role !== "client" && (
                        <button
                          onClick={() => handlePromoteUser(user._id, "client")}
                          className="ml-4 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                        >
                          Promote to Client
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Product Add/Edit Form */}
          {(isAdding || editingProduct) && (
            <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
              <h3 className="text-2xl font-bold mb-6">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (editingProduct) {
                    handleEditProduct(editingProduct._id);
                  } else {
                    handleAddProduct();
                  }
                }}
              >
                <div className="mb-6">
                  <label className="block text-lg mb-2">Product Name</label>
                  <input
                    type="text"
                    value={
                      editingProduct ? editingProduct.name : newProduct.name
                    }
                    onChange={(e) =>
                      editingProduct
                        ? setEditingProduct({
                            ...editingProduct,
                            name: e.target.value,
                          })
                        : setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    className="w-full border border-gray-300 p-3 rounded-md"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-lg mb-2">Price</label>
                  <input
                    type="text"
                    value={
                      editingProduct ? editingProduct.price : newProduct.price
                    }
                    onChange={(e) =>
                      editingProduct
                        ? setEditingProduct({
                            ...editingProduct,
                            price: e.target.value,
                          })
                        : setNewProduct({
                            ...newProduct,
                            price: e.target.value,
                          })
                    }
                    className="w-full border border-gray-300 p-3 rounded-md"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-lg mb-2">Product Image</label>
                  <input
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="w-full border border-gray-300 p-3 rounded-md"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
                  >
                    {editingProduct ? "Save Changes" : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
