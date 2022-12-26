import React from "react";
import Faculty from "./components/Faculty";

function About() {
  const classes = [<Faculty/>]
  const array =["Services" ];

  return (
    <>

    {classes.map((e,val)=>{
      return <>
        <div className="px-5 py-5">
    <div className="px-5 py-5 flex flex-wrap flex-col container">
        <h1 className="text-6xl font-bold ">{array[val]}</h1>
        {classes[val]}

    </div>
    </div>
        </>
      })}
    </>
  );
}

export default About;