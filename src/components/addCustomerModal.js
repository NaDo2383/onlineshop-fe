import React from "react";
import "../style/AddCustomerModal.css";

export default function AddCustomerModal({ modal, setModal }) {
  let modalDisplay = modal ? "block" : "none";

  function modalHandler() {
    setModal(!modal);
  }

  return (
    <section
      class="modalBackGround"
      style={{ display: modalDisplay }}
      onClick={() => {
        modalHandler();
      }}
    >
      <div
        className="modalBody"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div class="mb-3 row">
          <div class="col-sm-6">
            <label for="staticEmail" class=" col-form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="staticEmail"
              value=""
              placeholder="email@example.com"
            />
          </div>

          <div class="col-sm-6">
            <label for="staticUserName" class=" col-form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="staticUserName"
              value=""
              placeholder="User Name"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6">
            <label for="staticFName" class=" col-form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="staticFName"
              value=""
              placeholder="First Name"
            />
          </div>

          <div class="col-sm-6">
            <label for="staticLName" class="col-sm-5 col-form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="staticLName"
              value=""
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class=" col-form-label">
            Password
          </label>
          <div class="col-sm-12">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-5 row">
          <label for="ConfirmPassword" class="col-form-label">
            Confirm Password
          </label>
          <div class="col-sm-12">
            <input type="password" class="form-control" id="ConfirmPassword" />
          </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
          <button className="btn btn-success w-50">Save Customer</button>
        </div>
      </div>
    </section>
  );
}
