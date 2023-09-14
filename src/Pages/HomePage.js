import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div class="grid justify-center mt-5">
      <h1 class="text-center">Welcome to Favorite NPM Packages</h1>
      <div class="border border-gray-400 rounded-lg p-4 mt-4 text-center">
        <h3>You don't have any favorite Npm packages yet. Please add.</h3>
        <CustomButton
          name="Add Favorites"
          clickHandle={() => navigate("/add-fav")}
        />
      </div>
    </div>
  );
}
