import React from "react";

export default function AddProductModal({
    addingProduct,
    setAddingProduct,
    userData,
    cateData,
    fillCatArr,
    sendPics,
    loadingPic,
    addProduct,
    modalHandler,
    modal,
    setModal,
}) {
    return (
        <div
            style={modal ? { display: "block" } : { display: "none" }}
            id="addMenuModal"
        >
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
                <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => {
                        modalHandler();
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
