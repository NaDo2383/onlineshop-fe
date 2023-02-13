import React from "react";

export default function AddMenuModal({
  modal,
  setModal,
  addingMenu,
  setAddingMenu,
  addMenu,
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
        value={addingMenu.id}
        onChange={(e) => setAddingMenu({ ...addingMenu, id: e.target.value })}
      />
      <input
        class="form-control addMenuModalInput"
        type="text"
        placeholder="Menu name"
        aria-label="default input example"
        value={addingMenu.menuName}
        onChange={(e) =>
          setAddingMenu({ ...addingMenu, menuName: e.target.value })
        }
      />
      <input
        class="form-control addMenuModalInput"
        type="text"
        placeholder="Menu link /example"
        aria-label="default input example"
        value={addingMenu.link}
        onChange={(e) => setAddingMenu({ ...addingMenu, link: e.target.value })}
      />
      <input
        class="form-control addMenuModalInput"
        type="number"
        placeholder="Position"
        aria-label="default input example"
        value={addingMenu.position}
        onChange={(e) =>
          setAddingMenu({ ...addingMenu, position: e.target.value })
        }
      />
      <div className="addMenuModalBtns">
        <button type="button" class="btn btn-success" onClick={() => addMenu()}>
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
