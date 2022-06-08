import React from "react";
// import SearchIcon from "@material-ui/icons/Search";

function CustomInputField(props) {
  return (
    <div className="header__search">
      {/* <SearchIcon /> */}
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default CustomInputField;
