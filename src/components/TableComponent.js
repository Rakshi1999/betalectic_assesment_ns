import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GrFormView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function TableComponent(props) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [value, setvalue] = useState({});
  const [update, setUpdate] = useState("");

  useEffect(() => {
    if (id >= 0) {
      let temp = JSON.parse(localStorage.getItem("favList"));
      let val = temp.filter((obj, i) => i === id);
      setvalue(val);
      setUpdate(val[0]?.favMessage);
    }
  }, [id]);

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 mt-8 border">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Package Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props.dataSource.map((obj, i) => {
            return (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex items-center">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      {obj.packageName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap space-x-5">
                  <span
                    className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100"
                    onClick={() => {
                      setShow("view");
                      setId(i);
                    }}
                  >
                    <GrFormView size={15} />
                  </span>
                  <span
                    className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    onClick={() => {
                      setShow("edit");
                      setId(i);
                    }}
                  >
                    <FiEdit size={15} />
                  </span>
                  <span
                    className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    onClick={() => {
                      setShow("delete");
                      setId(i);
                    }}
                  >
                    <AiOutlineDelete size={15} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show && (
        <Modal
          action={show}
          setShow={setShow}
          userValue={value}
          userId={id}
          setLocal={props.setLocal}
          update={update}
          setUpdate={setUpdate}
          setId={setId}
        />
      )}
    </>
  );
}
