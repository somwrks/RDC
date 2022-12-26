import React from "react";
const Faculty = () => {
  const category = ["Radiology", "Pathology", "Electrocardiogram"];
  const radsub = ["Ultrasound", "Digital Xray"];
  const patsub = ["Blood tests"];
  const ecgsub = ["Electrocardiogram"];

  const Ultrasound = [
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test", "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
  ];
  const Xray = [
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test", "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    
  ];
  const Bloodtest = [ "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test", "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",];
  const Electrocardiogram = [ "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test", "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",
  "Test",];

  
  return (
    <div className="px-5 py-5">
      <div className="px-5 py-5 flex flex-wrap flex-col container">
        <h1 className="text-6xl font-bold ">Services</h1>
        <div className="container p-3 mt-5 rounded-t-3xl flex flex-wrap flex-col">
          <div className="mt-5 service-bg p-5 rounded-t-3xl">
            {category.map((value) => {
              return (
                <>
                  <h2 className="text-4xl font-bold text-white text-center">
                    {value}
                  </h2>
                  <div class="bg-gray-900 text-white mt-5">
                    <table class="table-fixed  border-separate border border-white-900">
                      <thead>
                        <tr>
                  {value === "Radiology" &&
                  radsub.map((sub_r) => {
                    return(
                          <th class="border text-2xl p-1 w-2/4">{sub_r}</th>
                    );
                  })
                  }
                        </tr>
                  {value === "Pathology" &&
                  patsub.map((sub_r) => {
                    return(
                        <tr>
                          <th class="pathology text-2xl  border p-1 w-3/4">{sub_r}</th>
                        </tr>
                    );
                  })
                  }
                  {value === "Electrocardiogram" &&
                  ecgsub.map((sub_r) => {
                    return(
                        <tr>
                          <th class="border p-1 text-2xl  w-2/4">{sub_r}</th>
                        </tr>
                    );
                  })
                  }
                      </thead>
                      <tbody className="text-xl font-mono">
                      {value ==="Radiology"?
                        <tr>
                          <td  class="p-3 border w-2/4 border-green-600">
                            <a title="Test Available" href="https://google.com">
                            {Ultrasound.map((ultra)=>{
                               return( ultra +"\t")})}
                              </a> 
                          </td>
                          <td class="p-3 border w-2/4 border-green-600">
                            <a title="Test Available" href="https://google.com">
                            {Xray.map((ultra)=>{
                               return( ultra +"\t")})}
                            </a>
                          </td>
                        </tr>
                      : ""}
                      {value ==="Pathology"?
                        <tr>
                          <td class="p-3 w-2/4 border border-green-600">
                        <a title="Test Available" href="https://google.com">
                            {Bloodtest.map((ultra)=>{
                               return( ultra+"\t")})}
                               </a>
                          </td>
                        </tr>
                      : ""}
                      {value ==="Electrocardiogram"?
                        <tr>
                          <td class="p-3 w-2/4 border border-green-600">
                        <a title="Test Available" href="https://google.com">
                            {Electrocardiogram.map((ultra)=>{
                               return( ultra+"\t")})}
                          </a>
                          </td>
                        </tr>
                      : ""}
                      </tbody>
                    </table>
                  </div>
              </>
              
            
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
