import React, { useEffect, useState } from 'react'

export default function AdminMenu() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchGet()
    }, [])

    function fetchGet() {
        fetch("http://localhost:8000/menu")
            .then((response) => response.json())
            .then((dt) => {
                setData(dt.result);
            })
            .catch((err) => setError(true))
            .finally(() => setLoading(false));
    }
    if (error) {
        return (<div>
            Error
        </div>)
    } else if (loading) {
        return (<div>
            Loading
        </div>)
    }
    return (
        <div>
            <table>
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
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{e.menuName}</td>
                                <td>{e.link}</td>
                                <td>
                                    <button type="button" class="btn btn-danger">Danger</button>
                                    <button type="button" class="btn btn-warning">Warning</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
