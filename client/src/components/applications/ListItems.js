import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";

function ListItems(props) {
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="listItem">
      <p>{props.itemName}</p>
      <div className="listItem__detailContainer">
        <small>PKR.{props.price}</small>
        <small>No. of item: {props.qty}</small>
      </div>
      <select
        id="inputState"
        className="form-control"
        style={{ width: "70px" }}
        // value={alertStock}
        // onChange={(e) => setAlertStock(e.target.value)}
      >
        <option selected>01</option>
        <option>10</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
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
