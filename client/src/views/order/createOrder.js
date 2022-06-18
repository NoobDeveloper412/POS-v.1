import React, { useEffect, useState } from "react";
import GradientCard from "../../components/cards/GradientCard";
import ListItems from "../../components/applications/ListItems";
import CustomInputField from "../../components/common/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";
import Axios from "axios";
import { Form, ListGroup, Row } from "reactstrap";
import { Select } from "@material-ui/core";

function OrderDesignScreen({ match, location, history }) {
  const productId = match.params.id;

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cart);

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

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

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
                onClick={(e) =>
                  dispatch(addToCart(item.id, Number(e.target.value)))
                }
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
              qty={1}
              price={item.price}
              productId={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderDesignScreen;
