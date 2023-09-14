import React from "react";

function Modal({ action, setShow, handleClick, userValue, update, setUpdate }) {
  console.log(update);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center: 'opacity-0 pointer-events-none'}`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-xl font-semibold mb-4 capitalize text-center">
            {action}
          </h2>
          {(action === "delete" && <p>Are you sure you want to delete?</p>) ||
            (action === "edit" && (
              <div>
                <h2>Package : {userValue[0]?.packageName}</h2>
                <div className="mt-2">
                  <div className="font-semibold">Message</div>
                  <input
                    className="outline-1"
                    type="text"
                    value={update}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                </div>
              </div>
            )) ||
            (action === "view" && (
              <div>
                <h2 className="font-bold">
                  Package Name :{" "}
                  <span className=" font-normal">
                    {userValue[0]?.packageName}
                  </span>
                </h2>
                <p className="font-bold">
                  Message:{" "}
                  <span className="font-normal">
                    {userValue[0]?.favMessage}
                  </span>
                </p>
              </div>
            ))}
        </div>
        <div className="modal-footer py-4 px-6">
          {action !== "view" && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => {
                handleClick();
                setShow("");
              }}
            >
              {(action === "edit" && "update") ||
                (action === "delete" && "delete")}
            </button>
          )}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => {
              setShow("");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
