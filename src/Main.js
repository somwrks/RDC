import React from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import Tests from "./components/Tests";
import LargeCard from "./components/LargeCard";
import Address from "./components/Address";

function Main() {
  return (
    <div className="max-w-7xl  mx-auto">
      <Header />
      <LargeCard />
      <Tests/>
      <Hours/>
      <Address/>
    </div>
  );
}

export default Main;