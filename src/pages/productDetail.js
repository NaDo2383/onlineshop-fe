import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div>
      <div className="">
        <ImageGallery items={images} />
      </div>
      <div>
        <div>{productSingleData && productSingleData.productName}</div>
        <div>{productSingleData && productSingleData.description}</div>
        <div>{productSingleData && productSingleData.price}</div>
        <div>{productSingleData && productSingleData.quantity}</div>
        <div>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
