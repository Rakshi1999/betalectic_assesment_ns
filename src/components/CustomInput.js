import React from "react";

export default function CustomInput(props) {
  return (
    <>
      <input
        type={props.type}
        className={props.cls}
        onChange={(e) => props.handleInput(e)}
        name={props.name || ""}
        value={props.value || ""}
        placeholder={props.place || ""}
      />
      {props.type === "radio" && <p>{props.value}</p>}
    </>
  );
}
