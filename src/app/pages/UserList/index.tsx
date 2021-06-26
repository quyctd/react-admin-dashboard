import "./index.css"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons"
import { userRowsData } from "../../data"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function UserList() {
  const [data, setData] = useState(userRowsData)

  const handleDelete = (id: number) => {
    const newData = data.filter((user) => user.id !== id)
    setData(newData)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction volume",
      width: 230,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={`/users/${params.row.id}/edit`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
