import React from "react";
import CustomButton from "./CustomButton";
import TextArea from "./TextArea";

function Modal({
  action,
  setShow,
  userId,
  userValue,
  update,
  setUpdate,
  setLocal,
  setId,
}) {
  console.log(userValue, "modal");
  function click() {
    let localData = JSON.parse(localStorage.getItem("favList"));
    if (action === "delete") {
      let temp = localData.filter((obj, i) => i !== userId);
      localStorage.setItem("favList", JSON.stringify(temp));
      setLocal(temp);
      setShow(false);
    } else if (action === "edit") {
      let temp = localData.map((obj, i) => {
        if (i === userId) {
          obj.favMessage = update;
        }
        return obj;
      });
      localStorage.setItem("favList", JSON.stringify(temp));
      setShow(false);
      setId("");
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 'opacity-0 pointer-events-none'}`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-sky-50 w-[35%] mx-auto drop-shadow-2xl rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-xl font-semibold mb-4 capitalize text-center">
            {action}
          </h2>
          {(action === "delete" && <p>Are you sure you want to delete?</p>) ||
            (action === "edit" && (
              <div>
                <h2 className="font-bold">
                  Package :{" "}
                  <span className=" font-normal">
                    {userValue[0]?.packageName}
                  </span>
                </h2>
                <div className="mt-2">
                  <div className="font-bold">Message:</div>
                  <TextArea
                    cls="border w-full border-grey-700 p-1 mt-2 rounded-sm"
                    type="text"
                    value={update}
                    handleChange={(e) => setUpdate(e.target.value)}
                    row={3}
                  />
                </div>
              </div>
            )) ||
            (action === "view" && (
              <div>
                <h2 className="font-bold capitalize">
                  Package Name :{" "}
                  <span className=" font-normal">
                    {userValue[0]?.packageName}
                  </span>
                </h2>
                <p className="font-bold mt-4">
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
            <CustomButton
              name={
                (action === "edit" && "Update") ||
                (action === "delete" && "Delete")
              }
              cls={
                action === "delete"
                  ? "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  : "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              }
              clickHandle={click}
            />
          )}
          <CustomButton
            name="Cancel"
            cls="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            clickHandle={() => setShow("")}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
