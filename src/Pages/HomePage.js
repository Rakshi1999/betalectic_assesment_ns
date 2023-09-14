import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import TableComponent from "../components/TableComponent";

export default function HomePage() {
  const navigate = useNavigate();
  let [fav, setFav] = useState("");

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("favList"));
    if (localData) {
      setFav(localData);
    }
  }, []);

  return (
    <>
      <div class="  grid justify-center mt-5">
        <h1 class="text-center">Welcome to Favorite NPM Packages</h1>
        {!fav.length && (
          <div class="border border-gray-400 rounded-lg p-4 mt-4 text-center">
            <h3>You don't have any favorite Npm packages yet. Please add.</h3>
            <CustomButton
              cls="bg-blue-500 hover:bg-blue-700 w-auto text-white font-bold py-2 px-4 rounded mt-4"
              name="Add Favorites"
              clickHandle={() => navigate("/add-fav")}
            />
          </div>
        )}
      </div>
      {fav.length && (
        <div className="w-[50%]  m-auto">
          <CustomButton
            cls="bg-sky-600 hover:bg-sky-700 w-auto text-white font-bold py-1 px-4 rounded mt-8"
            name="Add Favorites"
            clickHandle={() => navigate("/add-fav")}
          />
          <TableComponent dataSource={fav} setLocal={setFav} />
        </div>
      )}
    </>
  );
}
