import React from "react";

export default function CustomButton(props) {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 w-auto text-white font-bold py-2 px-4 rounded mt-4"
      onClick={() => props.clickHandle()}
    >
      {props.name}
    </button>
  );
}
