import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminUser() {
  const cateInit = {
    id: "",
    cateName: "",
  };

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [addingCate, setAddingCate] = useState(cateInit);

  useEffect(() => {
    getCatData();
  }, []);

  function getCatData() {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => {
        setUserData(res.data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-1">
          <button class="btn btn-success">Add new category</button>
        </div>
        <div className="col-1">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>#</th>
            <th>User Name</th>
            <th>isAdmin?</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, index) => {
            if (error) {
              return <div>{error}</div>;
            } else if (loading) {
              return <div>Loading</div>;
            }
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{e.userName}</td>
                {e.isAdmin ? (
                  <td style={{ color: "green" }}> true </td>
                ) : (
                  <td style={{ color: "green" }}> false </td>
                )}
                <td>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                  <button type="button" class="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
