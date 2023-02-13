import React from "react";

export default function AddCateModal({
  modal,
  setModal,
  addingCate,
  setAddingCate,
  addCate,
}) {
  return (
    <div
      style={modal ? { display: "block" } : { display: "none" }}
      id="addMenuModal"
    >
      <input
        class="form-control addMenuModalInput"
        type="text"
        placeholder="Menu name"
        aria-label="default input example"
        style={{ display: "none" }}
        value={addingCate.id}
        onChange={(e) => setAddingCate({ ...addingCate, id: e.target.value })}
      />
      <input
        class="form-control addMenuModalInput"
        type="text"
        placeholder="Category name"
        aria-label="default input example"
        value={addingCate.cateName}
        onChange={(e) =>
          setAddingCate({ ...addingCate, cateName: e.target.value })
        }
      />
      <div className="addMenuModalBtns">
        <button type="button" class="btn btn-success" onClick={() => addCate()}>
          Save
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => setModal(!modal)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
