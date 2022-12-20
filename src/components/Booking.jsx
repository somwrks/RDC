import React, { useState } from "react";
import client from "@sanity/client";

const sanityClient = client({
  projectId: "0idhl247",
  dataset: "production",
  token:
    "skzx0CQViU2qRjOG3COuau1pEl9cphvOhjRnM7JGHblYGgVZfn7uprLiaRrtqnYE9krLkXo7WK7XIICkCt0dSIlurQRp20wUFKLWef93XcpD44qIIspzG1Y3HMzZ7W93NzrdM4AqQmvwsdZXueDJ5rPOjtfy6UcRKMoEsvmArcybvy8Cmr6v",
});

const Booking = () => {
  const [paitentName, setPaitentName] = useState("");
  const [reason, setReason] = useState("");
  const [speciality, setSpeciality] = useState("");
  console.log(speciality)
  const [email, setEmail] = useState("");

  async function mutate(mutations) {
    const result = await fetch(
      `https://0idhl247.api.sanity.io/v2021-06-07/data/mutate/production`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer skzx0CQViU2qRjOG3COuau1pEl9cphvOhjRnM7JGHblYGgVZfn7uprLiaRrtqnYE9krLkXo7WK7XIICkCt0dSIlurQRp20wUFKLWef93XcpD44qIIspzG1Y3HMzZ7W93NzrdM4AqQmvwsdZXueDJ5rPOjtfy6UcRKMoEsvmArcybvy8Cmr6v`,
        },
        body: JSON.stringify(mutations),
        method: "POST",
      }
    );

    const json = await result.json();
    console.log(json);
    return json;
  }

  const mutations = {
    mutations: [
      {
        create: {
          _type: "appointment",
          paitent_name: paitentName,
          email: email,
          reason: reason,
          speciality: speciality,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(mutations);
    setPaitentName("");
    setEmail("");
    setReason("");
    setSpeciality("")
  };

  return (
    <div className="flex justify-center mt-5 ">
      <div>
        <div>
          <p className="text-4xl text-black/70">
            Search Doctor, Book Appointment
          </p>
        </div>
        <div className="mt-5 gap-10 max-w-7xl mx-auto flex items-center border-b py-5 border-b-black/50">
          {/* fiuirst */}
          <form onSubmit={handleSubmit} className="">
            <p className="py-2 font-semibold">Name</p>

            <input
              placeholder="Patient Name"
              value={paitentName}
              onChange={(e) => setPaitentName(e.target.value)}
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </form>
          <div className="">
            <p className="py-2 font-semibold">Email</p>
            <input
              placeholder="Patient Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </div>
          <div
            onClick={!email ? null : handleSubmit}
            className="bg-orange-500 px-5 py-1 text-white mt-8 "
          >
            <p className="py-2 ">SUBMIT</p>
          </div>
        </div>
        <div className="flex justify-between py-5 ">
          <div>
            <div className="border border-black/20 rounded-lg p-5">
            <p className="py-2 font-semibold">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality || ""}
                className=" border border-black/30 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
              >
                <option value="null">
                  None
                </option>
                <option value="cardio">
                  Cardio
                </option>
                <option value="drugs">
                  Drugs
                </option>
              </select>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
