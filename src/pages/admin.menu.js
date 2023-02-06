import React, { useEffect, useState } from "react";
import AddMenuModal from "../components/addMenuModal";
import axios from "axios";

export default function AdminMenu() {
    const menuInit = {
        id: "",
        menuName: "",
        link: "",
        position: "",
    };

    let arrWillDelete = [];

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [addingMenu, setAddingMenu] = useState(menuInit);

    useEffect(() => {
        getMenuData();
    }, []);

    function getMenuData() {
        fetch("http://localhost:8000/api/menu")
            .then((response) => response.json())
            .then((dt) => {
                setData(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }

    function deleteMenuData(id) {
        axios
            .delete(`http://localhost:8000/api/menu/${id}`)
            .then((res) => {
                setData(res.data.result);
            })
            .catch((err) => console.log(err));
    }

    function addMenu() {
        if (addingMenu.id) {
            axios
                .patch("http://localhost:8000/api/menu", addingMenu)
                .then((res) => {
                    setData(res.data.result);
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .post("http://localhost:8000/api/menu", addingMenu)
                .then((res) => {
                    console.log(res);
                    setData(res.data.result);
                })
                .catch((err) => console.log(err));
        }

        setModal(!modal);
        setAddingMenu(menuInit);
    }

    function startEditting(para) {
        setAddingMenu(para);
        setModal(!modal);
    }

    function CollectDataByGroup(para) {
        if (arrWillDelete.includes(para)) {
            arrWillDelete.splice(arrWillDelete.indexOf(para), 1);
            console.log(arrWillDelete);
        } else {
            arrWillDelete.push(para);
            console.log(arrWillDelete);
        }
    }

    function DeleteByGroup() {
        console.log("daragdaad bn shde ");
        axios
            .delete("http://localhost:8000/api/menu", {
                body: "dhusafhdj",
            })
            .then((res) => {
                setData(res.data.result);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="p-5">
            <AddMenuModal
                modal={modal}
                setModal={setModal}
                addMenu={addMenu}
                addingMenu={addingMenu}
                setAddingMenu={setAddingMenu}
            />
            <div className="row d-flex justify-content-center">
                <div className="col-1">
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => setModal(!modal)}
                    >
                        Add Menu
                    </button>
                </div>
                <div className="col-2">
                    <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => DeleteByGroup()}
                    >
                        Delete all selected menus
                    </button>
                </div>
            </div>
            <table className="table m-5">
                <thead>
                    <tr>
                        <th scope="col">Select</th>
                        <th scope="col">#</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">Menu Link</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, index) => {
                        if (error) {
                            return <div>Error</div>;
                        } else if (loading) {
                            return <div>Loading</div>;
                        }
                        return (
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() =>
                                            CollectDataByGroup(e.id)
                                        }
                                    />
                                </td>

                                <td>{index + 1}</td>
                                <td>{e.menuName}</td>
                                <td>{e.link}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => deleteMenuData(e.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => startEditting(e)}
                                    >
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
