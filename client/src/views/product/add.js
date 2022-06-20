import Axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions";

function Add() {
  const [image, setImage] = useState(
    "https://smarative.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562657549-7dfcbd4a97f8%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMTc3M3wwfDF8c2VhcmNofDN8fGJvcmRlcnxlbnwwfHx8fDE2MjAxNzAwMTM%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D2000&w=1920&q=75 "
  );

  const [title, setTitle] = useState("Product 1");
  const [description, setDescription] = useState("This is description");
  const [alertStock, setAlertStock] = useState(67);
  const [brand, setBrand] = useState("Brand");
  const [price, setPrice] = useState(1600);
  const [count_in_stock, setCount_in_stock] = useState(20);
  const dispatch = useDispatch();

  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(
      addProduct(
        title,
        brand,
        description,
        alertStock,
        price,
        count_in_stock,
        image
      )
    );
  };
  return (
    <div className="addProduct">
      <div className="row">
        <div className="col-sm-8">
          <h2>Product Details</h2>
          {/* <form action="#">
            <div className="input_div">
              <label htmlFor="">Product Title</label>
              <CustomInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </form> */}
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Product Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Product Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Brand</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Description</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Product Details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Alert Stock</label>
              <input
                type="number"
                className="form-control"
                id="inputAddress2"
                value={alertStock}
                onChange={(e) => setAlertStock(e.target.value)}
                placeholder="Alert Stock"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">In Stock</label>
                <input
                  type="number"
                  value={count_in_stock}
                  onChange={(e) => setCount_in_stock(e.target.value)}
                  className="form-control"
                  id="inputCity"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Price/unit in PKR</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={submitHanlder}
            >
              Add Product
            </button>
          </form>
        </div>
        <div className="col-sm-4 addProduct__image">
          <h3>Add Image</h3>
          <img src={image} alt="" id="addProduct__displayImage" />
          <label for="upload-file">
            {image == null ? (
              <span
                class="jss139 jss178 jss189 jss191 jss192 jss194 jss202 jss175"
                tabindex="0"
                role="button"
              >
                <span class="jss179">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="btn-primary "
                  />
                  <svg
                    class="jss111 jss160"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                  </svg>
                </span>
                <span class="jss327"></span>
              </span>
            ) : (
              ""
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Add;
