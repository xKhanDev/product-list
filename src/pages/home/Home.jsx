import React, { useEffect, useState } from "react";
import TableRow from "../../components/TableRow";
import AddProduct from "../../components/AddProduct";
import { CgClose } from "react-icons/cg";
import { useProducts } from "../../context/Products";
import { IoMdSearch } from "react-icons/io";

const Home = () => {
  const [isOpenProductPage, setIsOpenProductPage] = useState(false);
  const { products, setProducts } = useProducts() || [];
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, [setProducts]);

  const handleSearch = (e) => {
    const searchTerm = search.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (search === "") {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, [search]);

  return (
    <>
      <div className="w-full h-full overflow-hidden mt-2">
        <div className="p-6 bg-gray-100">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search in product"
              className="border border-border rounded-s-lg p-2 w-[90%] h-12"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoMdSearch
              className="cursor-pointer bg-gray-800 text-white p-2 rounded-e-sm w-[10%] h-12 mr-4"
              onClick={handleSearch}
            />
            <button
              className="bg-gray-600 text-white p-2 rounded-lg w-40"
              onClick={() => setIsOpenProductPage(!isOpenProductPage)}
            >
              + Add Product
            </button>
          </div>
          <div>
            <table className="min-w-full border-collapse overflow-x-auto sm:overflow-x-hidden">
              <thead>
                <tr className="bg-muted text-muted-foreground">
                  <th className="p-4 text-left">
                    <input type="checkbox" className="mr-2" />
                    Select All
                  </th>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Stock</th>
                  <th className="p-4 text-left">Price</th>
                </tr>
              </thead>
              {products?.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id} product={product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </table>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 z-10 bg-black/70">
        <span
          className={`absolute top-4 right-4 text-2xl cursor-pointer bg-white rounded-full p-3 z-20 ${
            isOpenProductPage ? "block" : "hidden"
          }`}
          onClick={() => setIsOpenProductPage(!isOpenProductPage)}
        >
          <CgClose />
        </span>
        {isOpenProductPage && <AddProduct />}
      </div>
    </>
  );
};

export default Home;
