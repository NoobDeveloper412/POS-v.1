import React from "react";
// import { mdiFileFind } from '@mdi/js';

function CustomInputField(props) {
  return (
    <div className="header__search">
      {/* <mdiFileFind /> */}
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default CustomInputField;
