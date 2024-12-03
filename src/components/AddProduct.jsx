import React, { useState, useEffect } from "react";

const AddProduct = () => {
  const [inputs, setInputs] = useState({
    image: "",
    name: "",
    stock: "",
    category: "",
    price: "",
  });
  const [products, setProducts] = useState([]);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Handle image input change
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputs((prevInputs) => ({ ...prevInputs, image: reader.result }));
      };
      reader.readAsDataURL(file); // Convert image to Base64 string
    }
  };

  // Handle form submission
  const handleUploadProduct = (e) => {
    e.preventDefault();
    if (
      !inputs.image ||
      !inputs.name ||
      !inputs.stock ||
      !inputs.category ||
      !inputs.price
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (inputs.stock <= 0 || inputs.price <= 0) {
      alert("Stock and Price must be greater than 0.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...inputs,
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Clear inputs
    setInputs({
      image: "",
      name: "",
      stock: "",
      category: "",
      price: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Product Upload</h2>
        <form onSubmit={handleUploadProduct}>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-primary"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={handleImageUpload}
            />
            {inputs.image && (
              <img
                src={inputs.image}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputs.name}
              placeholder="Product Name"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-primary"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={inputs.stock}
              placeholder="Available Stock"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  stock: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-primary mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={inputs.category}
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  category: e.target.value,
                }))
              }
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="shoes">Shoes</option>
              <option value="caps">Caps</option>
              <option value="jackets">Jackets</option>
              <option value="sucks">Socks</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-primary"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={inputs.price}
              placeholder="Price"
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:ring-primary"
              onChange={(e) =>
                setInputs((prevInputs) => ({
                  ...prevInputs,
                  price: e.target.value,
                }))
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
