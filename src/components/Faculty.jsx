import React from "react";
const Faculty = () => {
  const category = ["Radiology", "Pathology", "Electrocardiogram"];
  const radsub = ["Ultrasound", "Digital+Xray"];
  const patsub = ["Blood Tests"];
  const ecgsub = ["Electrocardiogram"];

  const Ultrasound = [
    "Upper+Abdomen+Ultrasound",
    "Lower+Abdomen+Ultrasound",
    "Pelvis+Ultrasound",
    "KUB+Ultrasound",
    "Neck+Ultrasound",
    "Thyroid+Ultrasound",
    "Obstetric+Ultrasound",
    "TIFFA+Ultrasound",
    "Scrotal+Ultrasound",
    "Testicular+Ultrasound",
    "Inguinoscrotal+Ultrasound",
    "High+Resolution+Ultrasound",
    "Sono+Mammography+Ultrasound",
    "TVS+Ultrasound",
    "Pediatric+Ultrasound",
    "Small+Parts+Ultrasound",
    "Color+Doppler",
    "...",
  ];
  const Xray = [
    "Chest+Xray",
    "Abdomen+Xray",
    "Head+Xray",
    "Spine+Xray",
    "Hand+Xray",
    "Forearm+Xray",
    "Arm+Xray",
    "Elbow+Xray",
    "Wrist+Xray",
    "Foot+Xray",
    "Leg+Xray",
    "Thigh+Xray",
    "Knee+Xray",
    "Ankle+Xray",
    "Hip+Xray",
    "Shoulder+Xray",
    "Pelvis+Xray",
    "...",
  ];
  const Bloodtest = [
    "Complete+Blood+Count+Test",
    "Hemoglobin+Test",
    "TLC+Test",
    "DLC+Test",
    "ESR+Test",
    "Blood Group+Test",
    "LFT+Test",
    "KFT+Test",
    "PT+Test",
    "PC+Test",
    "INR+Test",
    "Sugar F+Test",
    "PP+Test",
    "Random+BT+CT+Test",
    "Thyroid+Profile+Test",
    "Lipid Profile+Test",
    "Hormone+Test",
    "Stool Routine & Special+Test",
    "Urine Routine & Microscopic, Culture & Senstivity+Test",
    "ANA+Test",
    "Pleural+Test",
    "Ascitis Fluid+Test",
    "PAP Smear+Test",
    "FNAC+Test",
    "BIOPSY+Test",
    "...",
  ];
  const Electrocardiogram = [
    "Indoor+Electrocardiogram",
    "Outer+Electrocardiogram",
  ];

  return (
    <div className=" border-blue-900 border-4 service-bg  mt-5 rounded-t-3xl flex flex-wrap flex-col">
      <div className=" over-bg p-3 rounded-t-3xl">
        {category.map((value) => {
          return (
            <>
              <h2 className="text-4xl font-bold mt-2 text-white text-center">
                {value}
              </h2>
              <div className="bg-gray-900 text-white mt-5">
                <table className="table-fixed  border-separate border border-white-900">
                  <thead>
                    <tr>
                      {value === "Radiology" &&
                        radsub.map((sub_r) => {
                          return (
                            <th className="border text-2xl p-1 w-2/4">
                              {sub_r}
                            </th>
                          );
                        })}
                    </tr>
                    {value === "Pathology" &&
                      patsub.map((sub_r) => {
                        return (
                          <tr>
                            <th className="pathology text-2xl  border p-1 w-3/4">
                              {sub_r}
                            </th>
                          </tr>
                        );
                      })}
                    {value === "Electrocardiogram" &&
                      ecgsub.map((sub_r) => {
                        return (
                          <tr>
                            <th className="border p-1 text-2xl  w-2/4">
                              {sub_r}
                            </th>
                          </tr>
                        );
                      })}
                  </thead>
                  <tbody className="text-xl font-mono">
                    {value === "Radiology" ? (
                      <tr>
                        <td className="p-3 border w-2/4 border-green-600">
                            {Ultrasound.map((ultra) => {
                              return(
                          <a
                            title="Test Available"
                            target="_blank"
                            rel="noreferrer"
                            href={ultra!=="..."?`https://www.google.com/search?q=${ultra}+&sxsrf=ALiCzsZS-t3lldqjUfvOP6XYe8A3SHhh4Q%3A1672314785135&ei=oX-tY6rqB5jF3LUP7tmA6Ag&ved=0ahUKEwjqvuGF4p78AhWYIrcAHe4sAI0Q4dUDCA8&uact=5&oq=Upper+Abdomen+Ultrasound+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDCAljCAmDQBGgCcAF4AIABpgGIAaYBkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp`:"https://www.google.com/search?q=Radiology+tests+&sxsrf=ALiCzsZS-t3lldqjUfvOP6XYe8A3SHhh4Q%3A1672314785135&ei=oX-tY6rqB5jF3LUP7tmA6Ag&ved=0ahUKEwjqvuGF4p78AhWYIrcAHe4sAI0Q4dUDCA8&uact=5&oq=Upper+Abdomen+Ultrasound+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDCAljCAmDQBGgCcAF4AIABpgGIAaYBkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp"}
                          >
                               {ultra.replaceAll("+"," ").concat(",") + "\t"}
                          </a>
                    )})}
                        </td>
                        <td className="p-3 border w-2/4 border-green-600">
                            {Xray.map((ultra) => {
                              return(
                          <a
                            target="_blank"
                            rel="noreferrer"
                            title="Test Available"
                            href={ultra!=="..."?`https://www.google.com/search?q=${ultra}+&sxsrf=ALiCzsZS-t3lldqjUfvOP6XYe8A3SHhh4Q%3A1672314785135&ei=oX-tY6rqB5jF3LUP7tmA6Ag&ved=0ahUKEwjqvuGF4p78AhWYIrcAHe4sAI0Q4dUDCA8&uact=5&oq=Upper+Abdomen+Ultrasound+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDCAljCAmDQBGgCcAF4AIABpgGIAaYBkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp`:"https://www.google.com/search?q=Pathology+tests+&sxsrf=ALiCzsZS-t3lldqjUfvOP6XYe8A3SHhh4Q%3A1672314785135&ei=oX-tY6rqB5jF3LUP7tmA6Ag&ved=0ahUKEwjqvuGF4p78AhWYIrcAHe4sAI0Q4dUDCA8&uact=5&oq=Upper+Abdomen+Ultrasound+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDCAljCAmDQBGgCcAF4AIABpgGIAaYBkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp"}
                          >
                               {ultra.replaceAll("+"," ").concat(",") + "\t"}
                          </a>
                    )})}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {value === "Pathology" ? (
                      <tr>
                        <td className="p-3 w-2/4 border border-green-600">
                            {Bloodtest.map((ultra) => {
                              return(
                          <a
                            target="_blank"
                            rel="noreferrer"
                            title="Test Available"
                            href={`https://www.google.com/search?q=${ultra}+&sxsrf=ALiCzsZS-t3lldqjUfvOP6XYe8A3SHhh4Q%3A1672314785135&ei=oX-tY6rqB5jF3LUP7tmA6Ag&ved=0ahUKEwjqvuGF4p78AhWYIrcAHe4sAI0Q4dUDCA8&uact=5&oq=Upper+Abdomen+Ultrasound+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDCAljCAmDQBGgCcAF4AIABpgGIAaYBkgEDMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp`}
                          >
                               {ultra.replaceAll("+"," ").concat(",") + "\t"}
                          </a>
                    )})}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                    {value === "Electrocardiogram" ? (
                      <tr>
                        <td className="p-3 w-2/4 border border-green-600">
                            {Electrocardiogram.map((ultra) => {
                              return(
                          <a
                            target="_blank"
                            rel="noreferrer"
                            title="Test Available"
                            href="https://google.com"
                          >
                               {ultra.replaceAll("+"," ").concat(",") + "\t"}
                          </a>
                    )})}
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </tbody>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;
