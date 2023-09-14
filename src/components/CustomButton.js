import React from "react";

export default function CustomButton(props) {
  return (
    <button className={props.cls} onClick={() => props.clickHandle()}>
      {props.name}
    </button>
  );
}
