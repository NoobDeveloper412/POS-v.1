import React from "react";
// import { mdiPlus, mdiMinus } from '@mdi/js';

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
          {/* <mdiPlus /> */}
        </button>
        <button className="button1">
          {/* <mdiMinus /> */}
        </button>
      </div>
    </div>
  );
}

export default ListItems;
