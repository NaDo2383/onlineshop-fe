import React, { useEffect, useState } from "react";
import AddMenuModal from "../components/addMenuModal";

export default function AdminMenu() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchGet();
    }, []);

    function fetchGet() {
        fetch("http://localhost:8000/api/menu")
            .then((response) => response.json())
            .then((dt) => {
                setData(dt.result);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }

    return (
        <div className="p-5">
            <AddMenuModal modal={modal} setModal={setModal} />
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
                    <button type="button" class="btn btn-danger">
                        Delete all selected menus
                    </button>
                </div>
            </div>
            <table className="table m-5">
                <thead>
                    <tr>
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
                                <th scope="row">{index + 1}</th>
                                <td>{e.menuName}</td>
                                <td>{e.link}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                    >
                                        Warning
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
