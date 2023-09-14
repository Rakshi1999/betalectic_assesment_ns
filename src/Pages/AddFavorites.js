import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";

export default function AddFavorites() {
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState({});

  function handleSearch(e) {
    let localData = JSON.parse(localStorage.getItem("data"));
    let temp = localData.filter((obj) =>
      obj.package.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(temp);
  }

  function handleCheckInput(e) {
    console.log(e.target.value);
    setUserData({ ...userdata, packageName: e.target.value });
  }

  function handleTextArea(e) {}

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        localStorage.setItem("data", JSON.stringify(data.results));
      })
      .catch((e) => alert("Something went Wrong, Please Refresh the page!!"));
  }, []);

  return (
    <div className="p-4 grid justify-center bg-slate-400 h-screen">
      <h1 className="text-3xl font-semibold mt-5">
        Add your Favorite NPM Package Here
      </h1>
      <form className="w-full mt-[-4rem]">
        <fieldset className="border p-4 rounded-lg">
          <legend className="text-md font-semibold">
            Search for NPM Packages
          </legend>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
            onChange={handleSearch}
          />
        </fieldset>
        <fieldset className="border p-4 rounded-lg mt-4">
          <legend className="text-md font-semibold">Results</legend>
          <div className="mt-2 space-y-2 h-40 min-h-40 overflow-scroll">
            {data.map((ele, i) => {
              return (
                <div key={i} className="flex items-center">
                  <input
                    type="radio"
                    name="radio"
                    value={ele.package.name}
                    className="mr-2 hover:cursor-pointer"
                    onChange={handleCheckInput}
                    required
                  />{" "}
                  {ele.package.name}
                </div>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="border p-4 rounded-lg mt-4">
          <legend className="text-md font-semibold">
            Why is this your favorite package?
          </legend>
          <textarea
            className="w-full border rounded px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
            rows="4"
            onChange={handleTextArea}
          ></textarea>
        </fieldset>
        <CustomButton name="Add Fav" />
      </form>
    </div>
  );
}
