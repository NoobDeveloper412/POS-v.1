import Axios from "axios";
import React from "react";
import DataTable from "react-data-table-component";
export default function ViewOrders() {
  const [allOrders, setAllOrders] = React.useState([]);

  const getAllOrders = () => {
    Axios.get(`http://localhost:8000/products`, {})
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAllOrders(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  React.useEffect(() => {
    getAllOrders();
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
      name: "Alert Stock",
      field: "alert_stock",
      selector: (row) => row.alert_stock,
    },
    {
      name: "In Stock",
      field: "count_in_stock",
      selector: (row) => row.count_in_stock,
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
      <DataTable columns={columns} data={allOrders} />
    </div>
    // <section class="h-100 gradient-custom">
    //   <div class="container py-5 h-100">
    //     <div class="row d-flex justify-content-center align-items-center h-100">
    //       <div class="col-lg-10 col-xl-8">
    //         <div class="card" style={{ "border-radius": " 10px;" }}>
    //           <div class="card-header px-4 py-5">
    //             <h5 class="text-muted mb-0">
    //               Thanks for your Order,{" "}
    //               <span style={{ color: "#a8729a;" }}>Anna</span>!
    //             </h5>
    //           </div>
    //           <div class="card-body p-4">
    //             <div class="d-flex justify-content-between align-items-center mb-4">
    //               <p class="lead fw-normal mb-0" style={{ color: "#a8729a;" }}>
    //                 Receipt
    //               </p>
    //               <p class="small text-muted mb-0">
    //                 Receipt Voucher : 1KAU9-84UIL
    //               </p>
    //             </div>
    //             <div class="card shadow-0 border mb-4">
    //               <div class="card-body">
    //                 <div class="row">
    //                   <div class="col-md-2">
    //                     <img
    //                       src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
    //                       class="img-fluid"
    //                       alt="Phone"
    //                     />
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0">Samsung Galaxy</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">White</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">Capacity: 64GB</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">Qty: 1</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">$499</p>
    //                   </div>
    //                 </div>
    //                 <hr
    //                   class="mb-4"
    //                   style={{ "background-color": "#e0e0e0; opacity: 1;" }}
    //                 />
    //                 <div class="row d-flex align-items-center">
    //                   <div class="col-md-2">
    //                     <p class="text-muted mb-0 small">Track Order</p>
    //                   </div>
    //                   <div class="col-md-10">
    //                     <div
    //                       class="progress"
    //                       style={{ height: " 6px; border-radius: 16px;" }}
    //                     >
    //                       <div
    //                         class="progress-bar"
    //                         role="progressbar"
    //                         style={{
    //                         //   width: "65%",
    //                         //   "border-radius": "16px",
    //                         //   "background-color": "#a8729a",
    //                         }}
    //                         aria-valuenow="65"
    //                         aria-valuemin="0"
    //                         aria-valuemax="100"
    //                       ></div>
    //                     </div>
    //                     <div class="d-flex justify-content-around mb-1">
    //                       <p class="text-muted mt-1 mb-0 small ms-xl-5">
    //                         Out for delivary
    //                       </p>
    //                       <p class="text-muted mt-1 mb-0 small ms-xl-5">
    //                         Delivered
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="card shadow-0 border mb-4">
    //               <div class="card-body">
    //                 <div class="row">
    //                   <div class="col-md-2">
    //                     <img
    //                       src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
    //                       class="img-fluid"
    //                       alt="Phone"
    //                     />
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0">iPad</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">Pink rose</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">Capacity: 32GB</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">Qty: 1</p>
    //                   </div>
    //                   <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
    //                     <p class="text-muted mb-0 small">$399</p>
    //                   </div>
    //                 </div>
    //                 <hr
    //                   class="mb-4"
    //                 //   style="background-color: #e0e0e0; opacity: 1;"
    //                 />
    //                 <div class="row d-flex align-items-center">
    //                   <div class="col-md-2">
    //                     <p class="text-muted mb-0 small">Track Order</p>
    //                   </div>
    //                   <div class="col-md-10">
    //                     <div
    //                       class="progress"
    //                       //   style="height: 6px; border-radius: 16px;"
    //                     >
    //                       <div
    //                         class="progress-bar"
    //                         role="progressbar"
    //                         // style="width: 20%; border-radius: 16px; background-color: #a8729a;"
    //                         aria-valuenow="20"
    //                         aria-valuemin="0"
    //                         aria-valuemax="100"
    //                       ></div>
    //                     </div>
    //                     <div class="d-flex justify-content-around mb-1">
    //                       <p class="text-muted mt-1 mb-0 small ms-xl-5">
    //                         Out for delivary
    //                       </p>
    //                       <p class="text-muted mt-1 mb-0 small ms-xl-5">
    //                         Delivered
    //                       </p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="d-flex justify-content-between pt-2">
    //               <p class="fw-bold mb-0">Order Details</p>
    //               <p class="text-muted mb-0">
    //                 <span class="fw-bold me-4">Total</span> $898.00
    //               </p>
    //             </div>

    //             <div class="d-flex justify-content-between pt-2">
    //               <p class="text-muted mb-0">Invoice Number : 788152</p>
    //               <p class="text-muted mb-0">
    //                 <span class="fw-bold me-4">Discount</span> $19.00
    //               </p>
    //             </div>

    //             <div class="d-flex justify-content-between">
    //               <p class="text-muted mb-0">Invoice Date : 22 Dec,2019</p>
    //               <p class="text-muted mb-0">
    //                 <span class="fw-bold me-4">GST 18%</span> 123
    //               </p>
    //             </div>

    //             <div class="d-flex justify-content-between mb-5">
    //               <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>
    //               <p class="text-muted mb-0">
    //                 <span class="fw-bold me-4">Delivery Charges</span> Free
    //               </p>
    //             </div>
    //           </div>
    //           <div
    //             class="card-footer border-0 px-4 py-5"
    //             style={{
    //             //   "backgroundColor": "#a8729a",
    //             //   "borderBottomLeftRadius": "10px",
    //             //   "borderBottomRightRadius": " 10px",
    //             }}
    //           >
    //             <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
    //               Total paid: <span class="h2 mb-0 ms-2">$1040</span>
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
