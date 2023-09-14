import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function AddFavorites() {
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState({});
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    let localData = JSON.parse(localStorage.getItem("data"));
    let temp = localData.filter((obj) =>
      obj.package.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(temp);
    setSearch(e.target.value.toLowerCase());
  }

  function handleCheckInput(e) {
    setUserData({ ...userdata, packageName: e.target.value });
  }

  function handleTextArea(e) {
    setUserData({ ...userdata, favMessage: e.target.value });
  }

  function handleSubmit() {
    if (userdata.packageName && userdata.favMessage) {
      let localData = JSON.parse(localStorage.getItem("favList"));
      if (localData) {
        localStorage.setItem(
          "favList",
          JSON.stringify([...localData, userdata])
        );
      } else {
        localStorage.setItem("favList", JSON.stringify([userdata]));
      }
    } else {
      // handle erro here
    }
    navigate("/");
  }

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
          <CustomInput
            type="text"
            handleInput={handleSearch}
            cls="w-full border rounded px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
            value={search}
          />
        </fieldset>
        <fieldset className="border p-4 rounded-lg mt-4">
          <legend className="text-md font-semibold">Results</legend>
          <div className="mt-2 space-y-2 h-40 min-h-40 overflow-scroll">
            {data.map((ele, i) => {
              return (
                <div key={i} className="flex items-center">
                  <CustomInput
                    type="radio"
                    handleInput={handleCheckInput}
                    cls="mr-2 hover:cursor-pointer"
                    name="radio"
                    value={ele.package.name}
                  />
                </div>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="border p-4 rounded-lg mt-4">
          <legend className="text-md font-semibold">
            Why is this your favorite package?
          </legend>
          <TextArea
            cls="w-full border rounded px-3 py-2 mt-2 focus:outline-none focus:border-blue-500"
            row="4"
            handleChange={handleTextArea}
          />
        </fieldset>
        <CustomButton
          name="Add Fav"
          cls="bg-blue-500 hover:bg-blue-700 w-auto text-white font-bold py-2 px-4 rounded mt-4"
          clickHandle={handleSubmit}
        />
      </form>
    </div>
  );
}
