import React from "react";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Minimize";

function ListItems(props) {
  return (
    <div className="listItem">
      <p>{props.itemName}</p>
      <div className="listItem__detailContainer">
        <small>PKR.{props.price}</small>
        <small>No. of item: {props.qty}</small>
      </div>
      <div className="listItem__functionButton">
        <button className="button2">
          <AddIcon />
        </button>
        <button className="button1">
          <MinusIcon />
        </button>
      </div>
    </div>
  );
}

export default ListItems;
