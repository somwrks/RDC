import React, { useState } from "react";
import client from "@sanity/client";
import axios from "axios";
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
  console.log(speciality);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const authToken = "daca14549295d0a3733f7bea26c68bdc";
  const accountSid = "ACf89d66aeb242596d292d4a232c564b40";
  const from = "+17255278202";
  const sendSms = (to, body) => {
    axios
      .post(
        `https://api.twilio.com/2010-04-01/Accounts/ACf89d66aeb242596d292d4a232c564b40/Messages.json`,
        {
          From: from,
          To: to,
          Body: body,
        },
        {
          auth: {
            username: accountSid,
            password: authToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          speciality: speciality,
          phone: phone,
          gender: gender,
          address: address,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendSms(phone, "Hello from react!");
    // mutate(mutations);
    setPaitentName("");
    setEmail("");
    setReason("");
    setSpeciality("");
    setGender("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="flex justify-center mt-5 ">
      <div className="border-b-black/30 border-b">
        <div className="flex justify-center">
          <p className="text-4xl text-black/70 ">Book Appointment</p>
        </div>
        <div className="mt-5 gap-10 max-w-7xl mx-auto flex items-center border-b py-5 ">
          {/* fiuirst */}
          <form onSubmit={handleSubmit} className="">
            <p className="py-2 font-semibold">Name</p>

            <input
              placeholder="Patient Name"
              value={paitentName}
              onChange={(e) => setPaitentName(e.target.value)}
              className="outline-none rounded-lg  border border-black/60 px-5 py-2"
            />
          </form>
          <div className="">
            <p className="py-2 font-semibold">Email</p>
            <input
              placeholder="Patient Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none rounded-lg border border-black/60 px-5 py-2"
            />
          </div>
          <div
            onClick={!email ? null : handleSubmit}
            className="bg-orange-500 px-3 rounded-lg py-1 text-white mt-8 "
          >
            <p className="py-2 rounded-lg ">SUBMIT</p>
          </div>
        </div>
        <div className="flex justify-between py-5  ">
          <div className=" flex gap-10 ">
            <div className="flex flex-col">
              <p className="py-2 font-semibold">Phone</p>
              <input
                placeholder="+91578385"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="outline-none rounded-lg border border-black/60 px-5 py-2"
              />
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
                <option
                  className="py-2 border-b border-b-black/10"
                  value="cardio"
                >
                  Ultrasound
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Digital Xray
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Blood test
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Stool
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Urine Examination
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Biopsy
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Cultre & Sensitivity
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Hormone Analysis
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
                  Electrocardiogram
                </option>
              </select>
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
          </div>
        </div>
        <div className="flex justify-center py-5   ">
          <div className=" flex gap-10 ">
            <div className="flex flex-col">
              <p className="py-2 font-semibold">Address</p>
              <textarea
                placeholder="X6902 Y house, Z street"
                value={address}
                cols={60}
                rows={5}
                onChange={(e) => setAddress(e.target.value)}
                className="outline-none rounded-lg w-full border border-black/60 px-5 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
