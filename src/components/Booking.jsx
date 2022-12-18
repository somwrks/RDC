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
  console.log(process.env.REACT_SANITY_DATASET);

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
          reason: reason,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(mutations);
    setPaitentName("");
    setReason("");
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
            <p
              className="py-2 font-semibold"
              value={paitentName}
              onChange={(e) => setPaitentName(e.target.value)}
            >
              Name
            </p>

            <input
              placeholder="Patient Name"
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </form>
          <div className="">
            <p className="py-2 font-semibold">Email</p>
            <input
              placeholder="Patient Email"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="outline-none  border border-black/60 px-5 py-2"
            />
          </div>
          <div className="bg-orange-500 px-5 py-1 text-white mt-8 ">
            <p className="py-2 ">SUBMIT</p>
          </div>
        </div>
        <div className="flex justify-between py-5 ">
          <div>
            <div>
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
