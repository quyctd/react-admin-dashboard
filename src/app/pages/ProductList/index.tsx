import "./index.css"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons"
import { productRowsData } from "../../data"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ProductList() {
  const [data, setData] = useState(productRowsData)

  const handleDelete = (id: number) => {
    const newData = data.filter((product) => product.id !== id)
    setData(newData)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      renderCell: (params: any) => {
        return (
          <div className="productListItems">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        )
      },
    },
    { field: "stock", headerName: "Stock", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 230,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="productList">
      <h1>List Products</h1>
      <div
        style={{
          height: "80%",
          width: "100%",
          marginTop: "20px",
        }}
      >
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
