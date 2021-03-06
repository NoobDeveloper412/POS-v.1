import React, { useEffect, useState } from "react";
import GradientCard from "../../components/cards/GradientCard";
import ListItems from "../../components/applications/ListItems";
import CustomInputField from "../../components/common/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";
import Axios from "axios";
import { Form, ListGroup, Row } from "reactstrap";
import { Select } from "@material-ui/core";
import { createOrder } from "../../redux/orders/actions";

function OrderDesignScreen({ match, location, history }) {
  const productId = match.params.id;

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state);
  const { cartItems } = cart.cart;

  const [allProducts, setAllProducts] = React.useState([]);
  const [bill, setBill] = useState(0);

  const getAllProducts = () => {
    Axios.get(`http://localhost:8000/products`, {})
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setAllProducts(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    setBill(
      cartItems.reduce((a, v) => (a = a + v.price * v.product_quantity), 0)
    );
  }, [cartItems, dispatch, productId, qty]);

  const placeOrder = (e) => {
    e.preventDefault();
    // console.log(cart);

    console.log(cartItems);
    const data = {
      product_id: cartItems.map((item) => item.id),
      quantity: cartItems.map((item) => item.product_quantity),
      unit_price: cartItems.map((item) => item.price),
      discount: [0, 0],
      amount: cartItems.map((item) =>
        [item].reduce((a, v) => (a = a + v["price"] * v["product_quantity"]), 0)
      ),
      customer_id: 1,
      customer_name: "Muhammad Zuhair",
      payment_method: "cash",
      paid_amount: "0000",
      balance: "0000",
    };
    console.log(data);
    dispatch(createOrder(data));
  };
  return (
    <div className="orderDesignScreen__mainContainer">
      <div className="row">
        <div className="col-sm-8">
          <div className="row orderDesignScreen__mainHeading mr-5">
            <h1>Products</h1>
            <CustomInputField placeholder="Search for products..." />
          </div>
          <div className="cardContainer">
            {allProducts.map((item) => (
              <div
                className=""
                onClick={(e) => dispatch(addToCart(item.id, qty))}
              >
                <GradientCard
                  imgSrc="https://smarative.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1562657549-7dfcbd4a97f8%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMTc3M3wwfDF8c2VhcmNofDN8fGJvcmRlcnxlbnwwfHx8fDE2MjAxNzAwMTM%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D2000&w=1920&q=75"
                  children={
                    <div class="orderDesignScreen__cardText text-primary">
                      <h4>{item.product_name}</h4>
                      <p>{item.product_description}</p>
                      {/* <p>{item.product_brand}</p> */}
                      <p>{item.price}</p>
                      {/* <p>{item.count_in_stock}</p> */}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-4 orderContainer">
          <h1>Order</h1>
          {cartItems.map((item) => (
            <ListItems
              key={item.id}
              itemName={item.product_name}
              // qty={1}
              price={item.price}
              countInStock={item.count_in_stock}
              productId={item.id}
            />
          ))}
          <form className="listItem" onSubmit={(e) => placeOrder(e)}>
            <p>{"Total Bill: " + bill}</p>
            <div className="listItem__detailContainer">
              <div className="listItem__functionButton">
                <button className="btn" type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDesignScreen;
