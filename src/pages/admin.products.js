import React, { useState } from "react";
import axios from "axios";

export default function AdminProducts() {
  const productInit = {
    productName: "",
    categoryId: "",
    price: "",
    thumb: "",
  };
  let [productItem, setProductItem] = useState(productInit);
  return (
    <div>
      <div id="addMenuModal" className="d-flex flex-column">
        <input
          class="form-control addMenuModalInput"
          type="text"
          placeholder="Product name"
          aria-label="default input example"
          value={productItem.productName}
          onChange={(e) => {
            setProductItem({ ...productItem, productName: e.target.value });
          }}
        />
        <input
          class="form-control addMenuModalInput"
          type="text"
          placeholder="Price"
          aria-label="default input example"
          value={productItem.price}
          onChange={(e) => {
            setProductItem({ ...productItem, price: e.target.value });
          }}
        />
        <input
          class="form-control addMenuModalInput"
          type="text"
          placeholder="Price"
          aria-label="default input example"
          value={productItem.price}
          onChange={(e) => {
            setProductItem({ ...productItem, price: e.target.value });
          }}
        />
        <input
          class="form-control addMenuModalInput"
          type="file"
          placeholder="Position"
          aria-label="default input example"
          onChange={(e) => {
            const url = "https://api.cloudinary.com/v1_1/dpgnl2yyr/upload";

            const formData = new FormData();

            let file = e.target.files[0];
            formData.append("file", file);
            formData.append("api_key", "675484793394138");
            formData.append("folder", "shop");
            formData.append("upload_preset", "abvttugs");

            axios
              .post(url, formData)
              .then((res) => {
                console.log(res);
                setProductItem({ ...productItem, thumb: res.data.secure_url });
              })
              .catch((err) => alert(err))
              .finally((res) => {
                alert("upload finished");
              });
          }}
        />
        <div className="d-flex">
          <button type="button" class="btn btn-success">
            Save
          </button>
          <button type="button" class="btn btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
