import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";

function ListItems(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="listItem">
      <p>{props.itemName}</p>
      <div className="listItem__detailContainer">
        <small>PKR.{props.price}</small>
        <small>No. of item: {qty}</small>
      </div>
      <select
        id="inputState"
        className="form-control"
        style={{ width: "70px" }}
        value={props.qty}
        onChange={(e) =>
          dispatch(addToCart(props.productId, Number(e.target.value)))
        }
      >
        {[...Array(props.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <div className="listItem__functionButton">
        <button
          className="button1 bg-danger"
          onClick={() => removeFromCartHandler(props.productId)}
        >
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}

export default ListItems;
