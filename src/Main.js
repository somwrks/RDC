import React from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import LargeCard from "./components/LargeCard";

function Main() {
  return (
    <div className="max-w-7xl  mx-auto">
      <Header />
      <LargeCard />
      <Hours />
    </div>
  );
}

export default Main;
