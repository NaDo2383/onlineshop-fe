import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProducts() {
  const productInit = {
    productName: "",
    categoryId: [],
    price: "",
    thumbImage: "",
    quantity: "",
    description: "",
    images: "",
    createdUserId: "",
  };
  const [productItem, setProductItem] = useState(productInit);
  const [cateData, setCateData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingPic, setLoadingPic] = useState();
  const [addingProduct, setAddingProduct] = useState(productInit);

  useEffect(() => {
    getUserData();
    getCatData();
  }, []);

  function getUserData() {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        setUserData(res.data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  function getCatData() {
    axios
      .get("http://localhost:8000/api/cate")
      .then((res) => {
        setCateData(res.data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  async function sendPics(fieldName, files) {
    setLoadingPic(true);

    const url = "https://api.cloudinary.com/v1_1/dpgnl2yyr/upload";
    const newArr = [];
    for (let i = 0; i < files[0].length; i++) {
      newArr.push(files[0][i]);
    }

    const promise = await Promise.all(
      newArr.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("api_key", "675484793394138");
        formData.append("folder", "shop");
        formData.append("upload_preset", "abvttugs");

        return axios.post(url, formData);
      })
    );

    console.log(promise);

    const arr = [];

    promise.map((e) => {
      arr.push(e.data.secure_url);
    });

    if (fieldName == "images") {
      setAddingProduct({
        ...addingProduct,
        images: arr,
      });
    } else {
      setAddingProduct({
        ...addingProduct,
        thumbImage: arr[0],
      });
    }

    setLoadingPic(false);
  }

  function addProduct() {
    console.log(addingProduct);
    axios
      .post("http://localhost:8000/api/products", addingProduct)
      .then((res) => {
        setProductItem(res.data.result);
      })
      .catch((err) => console.log(err));

    setAddingProduct(productInit);
  }

  function fillCatArr(para, isChecked) {
    if (isChecked) {
      let newArr1 = { ...addingProduct };
      newArr1.categoryId.push(para);
      setAddingProduct(newArr1);
    } else {
      let newArr1 = { ...addingProduct };
      newArr1.categoryId.splice(newArr1.categoryId.indexOf(para), 1);
      setAddingProduct(newArr1);
    }
  }

  return (
    <div>
      <div id="addMenuModal" className="d-flex flex-column">
        <label>Product Name</label>
        <input
          class="form-control addMenuModalInput"
          type="text"
          placeholder="Product name"
          aria-label="default input example"
          value={addingProduct.productName}
          onChange={(e) =>
            setAddingProduct({
              ...addingProduct,
              productName: e.target.value,
            })
          }
        />
        <label>Product Price</label>
        <input
          class="form-control addMenuModalInput"
          type="number"
          placeholder="Price"
          aria-label="default input example"
          value={addingProduct.price}
          onChange={(e) =>
            setAddingProduct({
              ...addingProduct,
              price: e.target.value,
            })
          }
        />
        <label>Product Quantity</label>
        <input
          class="form-control addMenuModalInput"
          type="number"
          placeholder="Quantity"
          aria-label="default input example"
          value={addingProduct.quantity}
          onChange={(e) =>
            setAddingProduct({
              ...addingProduct,
              quantity: e.target.value,
            })
          }
        />
        <label>Product Description</label>
        <textarea
          class="form-control addMenuModalInput"
          placeholder="Description"
          aria-label="default input example"
          value={addingProduct.description}
          onChange={(e) =>
            setAddingProduct({
              ...addingProduct,
              description: e.target.value,
            })
          }
        />
        <label>Choose User</label>
        <select
          className="form-select addMenuModalInput"
          onChange={(e) =>
            setAddingProduct({
              ...addingProduct,
              createdUserId: e.target.value,
            })
          }
        >
          <option>Choose user...</option>;
          {userData.map((e) => {
            return <option value={e.id}>{e.userName}</option>;
          })}
        </select>
        <label>Check Category</label>
        <div className="addMenuModalCheckbox row">
          {cateData.map((e) => {
            return (
              <div className="d-flex gap-2 modal-checkboxes">
                <input
                  type="checkbox"
                  className="form-control form-check-input"
                  id={e.id}
                  onChange={(a) => {
                    fillCatArr(e.cateName, a.target.checked);
                  }}
                />
                <label for={e.id}>{e.cateName}</label>
              </div>
            );
          })}
        </div>
        <label>Upload Pictures</label>
        <input
          class="form-control addMenuModalInput"
          type="file"
          placeholder="Position"
          aria-label="default input example"
          onChange={(e) => {
            const arr = [];
            arr.push(e.target.files);
            sendPics("thumbImage", arr);
          }}
        />
        <input
          class="form-control addMenuModalInput"
          type="file"
          placeholder="Position"
          aria-label="default input example"
          onChange={(e) => {
            const arr = [];
            arr.push(e.target.files);
            sendPics("images", arr);
          }}
          multiple
        />
        {loadingPic ? (
          <div className="addMenuModalInput">Uploading pic ...</div>
        ) : (
          ""
        )}
        <div className="d-flex addMenuModalInput gap-5">
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              addProduct();
            }}
          >
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
