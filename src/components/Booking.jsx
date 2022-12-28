import React, { useState } from "react";
import client from "@sanity/client";
// import axios from "axios";
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
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [to, setTo] = useState("");
  console.log(to);
  const body =
    "SaarDOO coustumer serivce, Sorry for the inconvenience we are testing our sms service so yeah lol";
  function sendSms() {
    fetch(
      `http://localhost:4000/send-text?recipient=${to}&textmessage=${body}`
    ).catch((err) => console.error(err));
  }

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
  let temp = speciality.toString().replace("-","").replace("-","")
  console.log(temp)

  const mutations = {
    mutations: [
      {
        create: {
          _type: "appointment",
          paitent_name: paitentName,
          email: email,
          speciality: speciality,
          phone: to,
          gender: gender,
          address: address,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendSms();
    // mutate(mutations);
    setPaitentName("");
    setEmail("");
    setReason("");
    setSpeciality("");
    setGender("");
    setTo("");
    setAddress("");
  };


  // Constants for time

  const time ={radiologyultrasound:"10:30AM - 4:00PM",pathologybloodtest:"8:30AM - 4:00PM",radiologydigitalxray:"8:30AM - 4:00PM",radiologyelectrocardiogram:"8:30AM - 4:00PM",}

  return (
    <div className="flex container justify-center mt-5 ">
      <div className="border-b-black/30 border-b">
        <div className="flex justify-center">
          <p className="font-bold text-5xl py-5 text-center ">Book Appointment</p>
        </div>
        <div className="mt-5 gap-10 max-w-7xl mx-auto flex flex-wrap flex-col items-center border-b py-5 ">
          {/* fiuirst */}
          <form onSubmit={handleSubmit}>
            <p className="py-2 font-semibold">Name</p>

            <input
              placeholder="Patient Name"
              value={paitentName}
              onChange={(e) => setPaitentName(e.target.value)}
              className="outline-none rounded-lg  border border-black/60 px-5 py-2"
            />
          </form>
          <div >
              <p className="py-2 font-semibold">Phone</p>
              <input
                placeholder="+91578385"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="outline-none rounded-lg border border-black/60 px-5 py-2"
              />
            </div>
          <div>
            <p className="py-2 font-semibold">Email</p>
            <input
              placeholder="Patient Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none rounded-lg border border-black/60 px-5 py-2"
            />
          </div>
          <div className="p-2 border rounded-lg">
              <p>Gender</p>
              <select
                className="border border-black/30 p-3 rounded-lg"
                onChange={(e) => setGender(e.target.value)}
                value={gender || ""}
              >
                <option value="null">Null</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex justify-center    ">
          <div className=" flex gap-10 ">
            <div className="flex textarea flex-col">
              <p className="py-2 font-semibold">Address</p>
              <textarea
                placeholder="X6902 Y house, Z street"
                value={address}
                cols={60}
                
                rows={5}
                onChange={(e) => setAddress(e.target.value)}
                className="outline-none rounded-lg  border border-black/60 px-5 py-2"
              />
            </div>
          </div>
        </div>
          <div className="border flex flex-col border-black/20 w-52 rounded-lg  px-4 py-2 ">
              <p className="py-2 font-semibold">Type of Test</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality || ""}
                className=" border border-black/30 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
              >
                <option
                  className="py-2 border-b border-b-black/10"
                  value="null"
                >
                  None
                </option>
                <optgroup label="Radiology">
                  <option
                    className="py-2 border-b border-b-black/10"
                    value="radiology-ultrasound"
                  >
                    Ultrasound
                  </option>
                  <option
                    className="py-2 border-b border-b-black/10"
                    value="radiology-digital-xray"
                  >
                    Digital Xray
                  </option>
                </optgroup>
                <optgroup label="Pathology">
                  <option
                    className="py-2 border-b border-b-black/10"
                    value="pathology-blood-test"
                  >
                    Blood Test
                  </option>
                </optgroup>
                <optgroup label="Electrocardiogram">
                  <option
                    className="py-2 border-b border-b-black/10"
                    value="pathology-blood-test"
                  >
                    Electrocardiogram
                  </option>
                </optgroup>
              </select>
              <p className="py-2 font-semibold">Time of appointment</p>
              <div id="result">
                {
                 time[temp]
                }
              </div>
            </div>
          <div
            onClick={!email ? null : handleSubmit}
            className="bg-orange-500 px-3 rounded-lg py-1 text-white mt-8 "
          >
            <p className="py-2 rounded-lg ">SUBMIT</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between py-5  ">
          <div className="flex-wrap flex-col flex gap-10 ">
           

            

           
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Booking;
