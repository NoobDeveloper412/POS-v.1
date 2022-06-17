import Axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
export default function Pagination() {
  const [allProducts, setAllProducts] = React.useState([]);

  const getAllProducts = () => {
    Axios.get(`http://localhost:8000/products`, {})
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAllProducts(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  const columns = [
    {
      name: "Product Name",
      field: "product_name",
      selector: (row) => row.product_name,
    },
    {
      name: "Product Description",
      field: "product_description",
      selector: (row) => row.product_description,
    },
    {
      name: "Product Brand",
      field: "product_brand",
      selector: (row) => row.product_brand,
    },
    {
      name: "Product Quanitity",
      field: "product_quantity",
      selector: (row) => row.product_quantity,
    },
    {
      name: "Alert Stock",
      field: "alert_stock",
      selector: (row) => row.alert_stock,
    },
    {
      name: "Price",
      field: "price",
      selector: (row) => row.price,
    },
  ];

  return (
    <div className="viewProduct__container">
      <h1>Product List</h1>
      <DataTable columns={columns} data={allProducts} />
    </div>
  );
}
