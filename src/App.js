import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddFavorites from "./Pages/AddFavorites";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-fav" element={<AddFavorites />} />
      </Routes>
    </>
  );
}
