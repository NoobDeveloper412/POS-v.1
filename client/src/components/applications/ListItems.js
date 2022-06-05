import React from "react";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Minimize";


function ListItems(props) {
  return (
    <div className="listItem">
      <p>{props.itemName}</p>
      <div className="listItem__detailContainer">
        <small>PKR.{props.price}</small>
        <small>PKR.{props.qty}</small>
      </div>
      <div className="listItem__functionButton">
      <AddIcon />
      <MinusIcon />
      </div>
    </div>
  );
}

export default ListItems;
