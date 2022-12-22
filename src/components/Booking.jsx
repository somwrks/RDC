import React, { useState } from "react";
import client from "@sanity/client";
import axios from "axios"
const sanityClient = client({
  projectId: "0idhl247",
  dataset: "production",
  token:
    "skzx0CQViU2qRjOG3COuau1pEl9cphvOhjRnM7JGHblYGgVZfn7uprLiaRrtqnYE9krLkXo7WK7XIICkCt0dSIlurQRp20wUFKLWef93XcpD44qIIspzG1Y3HMzZ7W93NzrdM4AqQmvwsdZXueDJ5rPOjtfy6UcRKMoEsvmArcybvy8Cmr6v",
});

const Booking = () => {
  const [paitentName, setPaitentName] = useState("");
  const [reason, setReason] = useState("");
  const [speciality, setSpeciality] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  console.log(phone)



  const sendSMS = async (to, body) => {
    try {
      const response = await axios.post('https://api.twilio.com/2010-04-01/Accounts/ACf89d66aeb242596d292d4a232c564b40/Messages.json', {
        to,
        body,
        from: '+17255278202'
      }, {
        auth: {
          username: 'ACf89d66aeb242596d292d4a232c564b40',
          password: '909162b81723946aca90a2c2cbbe5149'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
          reason: reason,
          speciality: speciality,

          phone: phone,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const to = phone; // phone number entered in the form
  const body = `Appointment request from ${paitentName}: ${reason}`; // message 
    mutate(mutations);
    // sendSMS(to, body);
    setPaitentName("");
    setEmail("");
    setReason("");
    setSpeciality("")
    setPhone(''); // clear th
  };

  return (
    <div className="flex justify-center mt-5 ">
      <div className="border-b-black/30 border-b">
        <div cla>
          <p className="text-4xl text-black/70">Book Appointment</p>
        </div>
        <div className="mt-5 gap-10 max-w-7xl mx-auto flex items-center border-b py-5 ">
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
        <div className="flex justify-between py-5  ">
          <div className="mt-2 gap-10 max-w-7xl mx-auto flex items-center border-b py-1 ">
            {/* fiuirst */}
            <form onSubmit={handleSubmit} className="">
              <p className="py-2 font-semibold">Phone number</p>

              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="outline-none  border border-black/60 px-5 py-2"
              />
            </form>
          </div>
          <div className="border-b ">
            <div className="border border-black/20 w-52 rounded-lg  p-5">
              <p className="py-2 font-semibold">Speciality</p>
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
                  Cardio
                </option>
                <option
                  className="py-2 border-b border-b-black/10"
                  value="drugs"
                >
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
