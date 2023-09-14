import React from "react";

export default function TextArea(props) {
  return (
    <textarea
      className={props.cls}
      rows={props.row}
      onChange={(e) => props.handleChange(e)}
    ></textarea>
  );
}
