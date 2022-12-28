import React from "react";

export default function Doctor() {
  const docs = {
    "Dr. Sanjeev Srivastava": "Sonologist",
    "Dr. Sumit Srivastava": "Pathologist",
  };
  const ph = ["tel:9415121620", "tel:05240297002"];
  const docemail = [
    "mailto:drsanjeev1967@gmail.com",
    "mailto:drsanjeev1967@gmail.com",
  ];

  const devs = {
    Som: "Website Developer & Designer",
    Saar: "Website Developer",
  };
  const devexp = ["Highschool", "Highschool"];
  const devmail = ["somdeveloper.queries@gmail.com", "astrosaard@gmail.com "];
  return (
    <div className="px-5 py-5 flex doccenter flex-wrap flex-row container">
      <h1 className="text-4xl font-bold mt-2 text-center">Doctors</h1>
      <div className="container doccenter rounded-t-3xl flex flex-wrap flex-row">
        {Object.entries(docs).map(([e, i], s) => {
          return (
            <div className="mt-5 p-3  rounded-t-3xl">
              <div className=" p-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md bg-gradient-to-br from-blue-900 to-green-900">
                <div className="m-5 flex flex-col items-center ">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://i.pinimg.com/736x/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg"
                    alt="Bonnie"
                  />
                  <h5 className="mb-1 text-2xl text-center font-medium text-gray-900 dark:text-white">
                    {e}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {e === "Dr. Sanjeev Srivastava" ? "MBBS" : "MBBS & MD"}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={`${ph[s]}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Phone
                    </a>
                    <a
                      href={`${docemail[s]}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="text-4xl font-bold mt-2  text-center">Developers</h1>
      <div className="container doccenter rounded-t-3xl flex flex-wrap flex-row">
        {Object.entries(devs).map(([e, i], j) => {
          return (
            <div className="mt-5 p-3  rounded-t-3xl">
              <div className=" p-8 max-w-sm bg-white bg-gradient-to-br from-blue-900 to-green-900 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="m-5 flex flex-col items-center ">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src="https://cdn2.iconfinder.com/data/icons/people-3-2/128/Programmer-Avatar-Backend-Developer-Nerd-512.png"
                    alt="Bonnie"
                  />
                  <h5 className="mb-1 text-xl text-center font-medium text-gray-900 dark:text-white">
                    {e}
                  </h5>
                  <span className="text-center text-sm text-gray-500 dark:text-gray-400">
                    {i}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {devexp[j]}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href={`${devmail[j]}`}
                      rel="noreferrer"
                      target="_blank"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      Message
                    </a>
                  </div>
                  {e === "Som" && (
                    <div className="flex mt-4 space-x-3 md:mt-6">
                      <a
                        target="_blank"
                        
                        href={"https://thevector.xyz"}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        rel="noreferrer"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
