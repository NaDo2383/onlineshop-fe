import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProducts() {
    const productInit = {
        productName: "",
        categoryId: "",
        price: "",
        thumb: "",
        quantity: "",
        description: "",
    };
    const [productItem, setProductItem] = useState(productInit);
    const [cateData, setCateData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingPic, setLoadingPic] = useState();
    const [addingProduct, setAddingProduct] = useState(productInit);
    let file = [];

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
            setProductItem({
                ...productItem,
                images: arr,
            });
        } else {
            setProductItem({
                ...productItem,
                thumbImage: arr[0],
            });
        }

        setLoadingPic(false);
    }

    function addProduct() {
        axios
            .post("http://localhost:8000/api/products", addingProduct)
            .then((res) => {
                setProductItem(res.data.result);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <div id="addMenuModal" className="d-flex flex-column">
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
                <input
                    class="form-control addMenuModalInput"
                    type="text"
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
                <input
                    class="form-control addMenuModalInput"
                    type="text"
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
                <select className="form-select addMenuModalInput">
                    <option>Choose user...</option>;
                    {userData.map((e) => {
                        return <option>{e.userName}</option>;
                    })}
                </select>
                <div className="addMenuModalCheckbox row">
                    {cateData.map((e) => {
                        return (
                            <div className="d-flex gap-2 modal-checkboxes">
                                <input
                                    type="checkbox"
                                    className="form-control form-check-input"
                                    id={e.id}
                                />
                                <label for={e.id}>{e.cateName}</label>
                            </div>
                        );
                    })}
                </div>
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
