import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProductModal from "../components/addProductModal";
import ProductCard from "../components/ProductCard";

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
    id: "",
  };
  const [productItem, setProductItem] = useState([]);
  const [cateData, setCateData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingPic, setLoadingPic] = useState();
  const [addingProduct, setAddingProduct] = useState(productInit);
  const [productModal, setProductModal] = useState(false);

  useEffect(() => {
    getUserData();
    getCatData();
    getProductData();
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

  function getProductData() {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProductItem(res.data.result);
        console.log(res.data.result);
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
    if (addingProduct.id) {
      axios
        .patch("http://localhost:8000/api/products", addingProduct)
        .then((res) => {
          setProductItem(res.data.result);
          console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:8000/api/products", addingProduct)
        .then((res) => {
          setProductItem(res.data.result);
          console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    }

    modalHandler();
    setAddingProduct(productInit);
  }

  function modalHandler() {
    setProductModal(!productModal);
  }

  function closeModal() {
    setProductModal(!productModal);
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

  function deleteProduct(id) {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProductItem(res.data.result);
      })
      .catch((err) => console.log(err));
  }

  function startEditting(para) {
    setAddingProduct(para);
    modalHandler();
  }

  return (
    <div>
      <AddProductModal
        addingProduct={addingProduct}
        setAddingProduct={setAddingProduct}
        userData={userData}
        cateData={cateData}
        fillCatArr={fillCatArr}
        sendPics={sendPics}
        loadingPic={loadingPic}
        addProduct={addProduct}
        modalHandler={modalHandler}
        modal={productModal}
        setModal={setProductModal}
        closeModal={closeModal}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-1">
          <button class="btn btn-success" onClick={() => modalHandler()}>
            Add New Product
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {productItem &&
            productItem.map((item) => (
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={item.thumbImage} alt="Img" />
                <div class="card-body">
                  <h5 class="card-title">{item.productName}</h5>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">{item.quantity}</p>
                  <a
                    href="#"
                    class="btn btn-primary"
                    onClick={() => startEditting(item)}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="btn btn-danger"
                    onClick={() => deleteProduct(item.id)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
