import React from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";

import client from "@sanity/client";
import useState from "react";

const sanityClient = client({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  token: "your-api-token", // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});
function Doctor() {
  const [newdata, setNewdata] = useState("");
  const mutate = (id, newData) => {
    sanityClient.patch(id).set(newData).commit();
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Booking />
    </div>
  );
}

export default Doctor;
