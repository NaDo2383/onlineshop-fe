import { productCard } from "../data/productCard";
import "../App.css";
import { ProductsPage } from "../data/pagesData";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
  const productInit = {
    id: "",
    createdDated: 0,
    productName: "",
    price: "",
    thumbImage: "",
    images: [],
    quantity: "",
    description: "",
    createdUserId: "",
    categoryId: [],
  };
  const [productData, setProductData] = useState();

  useEffect(() => {
    getProductData();
    console.log("aaa");
  }, []);

  function getProductData() {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data.result);
        setProductData(res.data.result);
      })
      .catch((err) => console.log("getProductData error", err));
  }

  return (
    <div className="flex flex-d align-items justify-content">
      <>
        <div className="containerTitle flex flex-d align-items justify-content">
          <h1 className="bigTitle">Products</h1>
          <span className="bigText">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </span>
        </div>
        <img src={require("../assets/page/products/ProductsPage.jpg")} alt="" />
      </>

      <div className="flex align-items" style={{ margin: "15px" }}>
        <div
          className="flex flex-row p-2"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <input
            type="text"
            placeholder=" Search property"
            style={{ width: "800px", margin: 5 }}
          />
        </div>
        <button>Filter</button>
      </div>
      <div>
        <div className="flex justify-between align-items">
          <h1>Total Product</h1>
          <span className="totalProductCount">
            {productData ? productData.length : 0}
          </span>
        </div>
        <div className="productCard">
          {productData &&
            productData.map((item) => (
              <ProductCard item={item} key={item._id} />
            ))}
        </div>
      </div>
    </div>
  );
};
