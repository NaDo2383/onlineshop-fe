import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/ProductDetail.css";

export default function ProductDetail() {
  let { id } = useParams();
  const [productSingleData, setSingleProductData] = useState();
  const images = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setSingleProductData(res.data.result[0]);
      })
      .catch((err) => console.log("getProductData error", err));
  }, []);

  useEffect(() => {
    productSingleData?.images?.map((image) => {
      console.log(image);
      images.push({ original: image, thumbnail: image });
    });
  }, [productSingleData]);

  console.log(productSingleData);

  return (
    <div className="productDetailContainer flex align-items">
      <div className="sliderContainer">
        <ImageGallery items={images} />
      </div>
      <div className="productDetailContainerRight flex flex-d">
        <div className="productDetailTitle">
          {productSingleData && productSingleData.productName}
        </div>
        <div className="productDetailDescription">
          {productSingleData && productSingleData.description}
        </div>
        <div className="productDetailPrice">
          ${productSingleData && productSingleData.price}
        </div>
        <div className="productDetailQuantity">
          {productSingleData && productSingleData.quantity}
        </div>
        <div className="buttonContainer flex">
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
