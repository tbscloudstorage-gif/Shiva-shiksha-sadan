// import React from "react";
import {
  FaBus,
  FaShuttleVan,
  FaCheck,
  FaInfoCircle,
  
  FaUserShield,
  FaMapMarkedAlt,
  FaFirstAid,
  FaClipboardCheck,
  FaExclamationCircle,
} from "react-icons/fa";


export default function TransportFacility() {

  const transportOptions = [
    {
      icon: <FaBus />,
      title: "School Bus Service",
      type: "bus",
      features: [
        "Spacious and Comfortable Seating",
        "GPS-Enabled Vehicles",
        "Trained female attendants",
        "Equipped with First-Aid Kits",
        "Regular maintenance checks",
      ],
      info: "Ideal for group transportation with maximum safety",
    },
    {
      icon: <FaShuttleVan />,
      title: "Mini Van Service",
      type: "van",
      features: [
        "Compact and flexible",
        "Convenient Pick-up and Drop-off",
        "Door-to-door service",
        "Personalized attention",
        "Efficient for smaller groups",
      ],
      info: "Perfect for specific routes with fewer students",
    },
  ];

  // const routes = [
  //   {
  //     code: "A1",
  //     title: "Dashrath Puri / Janakpuri Route",
  //     locations: [
  //       "Dashrath Puri Main Market",
  //       "Janakpuri District Center",
  //       "Janakpuri A-Block",
  //       "C-2B Janakpuri",
  //     ],
  //   },
  //   {
  //     code: "A2",
  //     title: "Uttam Nagar / Check Post Route",
  //     locations: [
  //       "Uttam Nagar East Metro",
  //       "Uttam Nagar West",
  //       "Dwarka Check Post",
  //       "Mohan Garden",
  //     ],
  //   },
  //   {
  //     code: "A3",
  //     title: "Dada Dev Hospital Route",
  //     locations: [
  //       "Dada Dev Hospital Main Gate",
  //       "Raghuram Nagar",
  //       "Sector 22 Dwarka",
  //       "Sector 23 Dwarka",
  //     ],
  //   },
  //   {
  //     code: "A4",
  //     title: "Dwarka Route",
  //     locations: [
  //       "Dwarka Sector 6",
  //       "Dwarka Sector 10",
  //       "Dwarka Sector 12",
  //       "Dwarka Sector 13",
  //     ],
  //   },
  // ];

  const safetyStandards = [
    {
      icon: <FaUserShield />,
      title: "Trained Staff",
      description: "Experienced drivers and trained female attendants",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Live Tracking",
      description: "GPS-enabled vehicles with real-time tracking",
    },
    {
      icon: <FaFirstAid />,
      title: "Medical Support",
      description: "First-aid kits and emergency response training",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Regular Inspection",
      description: "Routine vehicle checks and safety inspections",
    },
  ];

  const importantInfo = [
    "School Transport facility is not mandatory but an optional service, available on certain routes only. It may not be available at every student's place.",
    "The school reserves the right to suspend any route permanently or temporarily at the sole discretion of the Principal without any intimation.",
    "The facility is available for full session only and no withdrawals shall be allowed in between the academic year. Bus facility, once withdrawn, shall not be permitted to start again, even if paid for the whole session but withdrawn. Request for changing of route/bus stoppage or one sided transportation shall not be entertained.",
    "The bus/ van shall pick and drop students at the designated bus stops only (designated by the school). No diversion/ extension shall be entertained on routes/ designated stops. No student shall be picked from home or their street but only designated stoppages (designated by the school).",
    "	The designated stops get revised regularly. Parents are required to check the same with the transport in charge before availing the school transport facility.",
    "	In case the roads of a particular route are in bad shape / are narrow/ are under construction/ or blocked due to some reasons, the route and/or concerned bus stoppages may be changed and parents must have no objection to the same.",
    "	If the students in a bus/ van are less than the minimum number of students required, then any route can be discontinued at any time with or without prior notice. In case, the school takes such a decision to discontinue any route or stoppage in between the session, the fee paid for the months for which the service has been denied, shall be adjusted.",
    "	Transport Fee shall be paid with the school fee. Transport Fee is neither refundable nor transferable in any condition and shall be charged for 12 months. E.g. If a student joins/ is allotted a school bus in July, parents have to pay for the months of April, May, June and July, along with all the remaining months. Similarly, if a student discontinues availing the transport in November, the balance payment for December, subsequent months of Jan-Feb-March shall also be payable. Gap months shall also be charged.",
    "	There may be a fee hike in the mid of the session owing to increase in the price of fuel etc.",
    "	Students are expected to be at the designated bus stop at least 5 minutes prior to the arrival of the bus. The bus/ van shall not wait for any student and shall leave the bus stop at allotted time. Parents should escort the child personally to the bus stop in the morning and afternoon, observing the safety and security of their child.",
    "	There shall be no fee concession for siblings studying in the school.",
    "	The bus facility shall not be available during extra classes, board examinations, events, functions, PTMs and other special occasions.",
    "	Students shall not take any body part like hands/ face etc. out of the bus/ van windows for any purpose, owing to safety concerns.",
    "	Students, who are unable to maintain cleanliness, discipline or decorum in a bus or who do not follow the school transport rules mentioned above shall be barred from availing the conveyance facility.  "
  ];

  return (
    <main className="transport-page">

      


      {/* ============================
          TRANSPORT OPTIONS
      ============================ */}
      <section className="transport-section transport-options-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span className="" style={{color : "#D41A2E"}}>TRANSPORT OPTIONS</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Choose the Right Transport Option</h2>

          </div>


          <div className="transport-options-grid">

            {transportOptions.map((item, index) => (

              <div className="transport-option-card" key={index}>

                <div
                  className={`transport-option-icon ${
                    item.type === "van" ? "green" : ""
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">{item.title}</h3>


                <div className="transport-feature-list">

                  {item.features.map((feature, featureIndex) => (

                    <div
                      className="transport-feature"
                      key={featureIndex}
                    >
                      <FaCheck />

                      <span>{feature}</span>
                    </div>

                  ))}

                </div>


                <div className="transport-info-box">

                  <FaInfoCircle />

                  <span>{item.info}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ============================
          ROUTES
      ============================ */}
      {/* <section className="transport-section routes-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span  style={{color : "#D41A2E"}}>COVERAGE AREA</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Our Transport Routes</h2>

            <p>
              Serving major residential areas in and around Dwarka with
              4 convenient routes
            </p>

          </div>


          <div className="transport-routes-grid">

            {routes.map((route, index) => (

              <div className="transport-route-card" key={index} >

                <div className="route-code" >
                  {route.code}
                </div>

                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">{route.title}</h3>


                <div className="route-location-list">

                  {route.locations.map((location, locationIndex) => (

                    <div
                      className="route-location"
                      key={locationIndex}
                    >
                      <FaMapMarkerAlt   style={{color : "#D41A2E"}}/>

                      <span>{location}</span>
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section> */}


      {/* ============================
          SAFETY
      ============================ */}
      <section className="transport-section safety-section">

        <div className="transport-container">

          <div className="transport-section-heading">

            <span>SAFETY FIRST</span>

            <h2 className="it-breadcrumb-title it-split-text it-split-in-right">Our Safety Standards</h2>

            <p>
              Ensuring the highest safety standards for your child's commute
            </p>

          </div>


          <div className="safety-grid">

            {safetyStandards.map((item, index) => (

              <div className="safety-card" key={index}>

                <div className="safety-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ============================
          IMPORTANT INFORMATION
      ============================ */}
      <section className="important-section " style={{marginBottom : "80px"}}>

        <div className="transport-container">

          <div className="important-box" style={{maxWidth: "1100px"}}>

            <div className="important-heading">

              <FaExclamationCircle />

              <h2>Important Information</h2>

            </div>


            <div className="important-list">

              {importantInfo.map((item, index) => (

                <div className="important-item" key={index}>

                  <FaCheck />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}