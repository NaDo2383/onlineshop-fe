import React from "react";

export default function AddMenuModal({ modal, setModal }) {
    return (
        // {modal ? "display:block" : "display:hidden"}
        // style={{display : modal? "block" : "none"}}
        <div
            style={modal ? { display: "block" } : { display: "none" }}
            id="addMenuModal"
        >
            <input
                class="form-control addMenuModalInput"
                type="text"
                placeholder="Menu name"
                aria-label="default input example"
            />
            <input
                class="form-control addMenuModalInput"
                type="text"
                placeholder="Menu link /example"
                aria-label="default input example"
            />
            <input
                class="form-control addMenuModalInput"
                type="text"
                placeholder="Position"
                aria-label="default input example"
            />
            <div className="addMenuModalBtns">
                <button type="button" class="btn btn-success">
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
