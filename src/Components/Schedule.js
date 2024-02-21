import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="close-btn"
          onClick={onClose}
          style={{ color: "red", fontSize: "3vh", fontWeight: "bolder" }}
        >
          X
        </button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p>
                <strong>{index + 1}:</strong> {dayDetails}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
      "Energy scenario - Solar power system concepts, components - Solar energy based power generation - Fundamentals of electricity -Photovoltaic effects, principles -Solar cells, panels and array of panels -Series and parallel effects on solar power system and design of standalone system. Solar Power System Installation and Hands on session - Basic wiring system",
    ],

    "1:1": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "1:2": [
      "Game Engines- Unity Development Environment- Basic Unity Game Design- Introduction to Scripting- Simple Movement and Input",
    ],
    "1:3": [
      "Physics Concepts- Game Design Strategies- Virtual Worlds- Animation",
    ],
    "1:4": [
      "Physics Concepts- Game Design Strategies- Virtual Worlds- Animation",
    ],
    "2:0": [
      "Energy scenario - Solar power system concepts, components - Solar energy based power generation - Fundamentals of electricity -Photovoltaic effects, principles -Solar cells, panels and array of panels -Series and parallel effects on solar power system and design of standalone system. Solar Power System Installation and Hands on session - Basic wiring system",
    ],
    "2:1": [
      "Types of Solar Inverter and selection criteria, Solar batteries characteristics and importance, Types of solar power system - Classification on solar power system for applications , Installation, commissioning and troubleshooting of off grid solar power plants, Solar panel and components Installation, Testing, commissioning and troubleshooting and performance evaluation.",
    ],
    "2:2": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "2:3": [
      "Overview of web development, Web designing, Web development and web designing, Frontend Development",
    ],
    "2:4": [
      "CSS, The Box Model, Typography, Lists and Forms, Demo on Server connection-Case study",
    ],
    "3:0": [
      "Energy scenario - Solar power system concepts, components - Solar energy based power generation - Fundamentals of electricity -Photovoltaic effects, principles -Solar cells, panels and array of panels -Series and parallel effects on solar power system and design of standalone system. Solar Power System Installation and Hands on session - Basic wiring system",
    ],
    "3:1": [
      "Types of Solar Inverter and selection criteria, Solar batteries characteristics and importance, Types of solar power system - Classification on solar power system for applications , Installation, commissioning and troubleshooting of off grid solar power plants, Solar panel and components Installation, Testing, commissioning and troubleshooting and performance evaluation.",
    ],
    "3:2": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "3:3": [
      "Digital-Input and Digital-Output hands on session Analog input (using potentiometer)",
    ],
    "3:4": [
      "Analog Output (using multi meter meter) or adjusting the brightness of LED Seven Segment display Programming to display number from ‘0 to 9’",
    ],
    "4:0": [
      "Game Engines- Unity Development Environment- Basic Unity Game Design- Introduction to Scripting- Simple Movement and Input",
    ],
    "4:1": [
      "Physics Concepts- Game Design Strategies- Virtual Worlds- Animation",
    ],
    "4:2": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "4:3": [
      "Digital-Input and Digital-Output hands on session Analog input (using potentiometer)",
    ],
    "4:4": [
      "Analog Output (using multi meter meter) or adjusting the brightness of LED Seven Segment display Programming to display number from ‘0 to 9’",
    ],
    "5:0": [
      "Energy scenario - Solar power system concepts, components - Solar energy based power generation - Fundamentals of electricity -Photovoltaic effects, principles -Solar cells, panels and array of panels -Series and parallel effects on solar power system and design of standalone system. Solar Power System Installation and Hands on session - Basic wiring system",
    ],

    "5:1": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "5:2": [
      "Game Engines- Unity Development Environment- Basic Unity Game Design- Introduction to Scripting- Simple Movement and Input",
    ],
    "5:3": [
      "Physics Concepts- Game Design Strategies- Virtual Worlds- Animation",
    ],
    "5:4": [
      "Physics Concepts- Game Design Strategies- Virtual Worlds- Animation",
    ],
    "6:0": [
      "Energy scenario - Solar power system concepts, components - Solar energy based power generation - Fundamentals of electricity -Photovoltaic effects, principles -Solar cells, panels and array of panels -Series and parallel effects on solar power system and design of standalone system. Solar Power System Installation and Hands on session - Basic wiring system",
    ],
    "6:1": [
      "Types of Solar Inverter and selection criteria, Solar batteries characteristics and importance, Types of solar power system - Classification on solar power system for applications , Installation, commissioning and troubleshooting of off grid solar power plants, Solar panel and components Installation, Testing, commissioning and troubleshooting and performance evaluation.",
    ],
    "6:2": ["Manufacturing of LED Bulb -Project work-Lab visit"],
    "6:3": [
      "Digital-Input and Digital-Output hands on session Analog input (using potentiometer)",
    ],
    "6:4": [
      "Analog Output (using multi meter meter) or adjusting the brightness of LED Seven Segment display Programming to display number from ‘0 to 9’",
    ],
  });
  const x = ["Track 1", "Track 2", "Track 3", "Track 4", "Track 1", "Track 3"];

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek, " ", weekIndex);
    const details = detailsByWeek[selectedWeek + ":" + weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);
  const topicsByWeek = {
    1: [
      "Solar Power System",
      "Manufacturing of LED Bulb ",
      "3D Game Development",
      "3D Game Development - Using Unity and C",
      "User Interfaces-Project Work",
    ],
    2: [
      "Solar Power System",
      "Testing, commissioning and troubleshooting",
      "Manufacturing of LED Bulb ",
      "Web Development",
      "Web Aesthetics",
    ],
    3: [
      "Solar Power System",
      "Testing, commissioning and troubleshooting",
      "Manufacturing of LED Bulb ",
      "Arduino Basics",
      "Seven Segment display Programming ",
    ],
    4: [
      "3D Game Development",
      "3D Game Development - Using Unity and C",
      "User Interfaces-Project Work",
      "Arduino Basics",
      "Seven Segment display Programming ",
    ],
    5: [
      "Solar Power System",
      "Manufacturing of LED Bulb ",
      "3D Game Development",
      "3D Game Development - Using Unity and C",
      "User Interfaces-Project Work",
    ],
    6: [
      "Solar Power System",
      "Testing, commissioning and troubleshooting",
      "Manufacturing of LED Bulb ",
      "Arduino Basics",
      "Seven Segment display Programming ",
    ],
  };
  return (
    <div
      className="schedule-container"
      style={{
        marginTop: "10vh",
        textAlign: "center",
        padding: "2vh",
        background: "#fafafa",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          background: "linear-gradient(black, blue)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Syllabus
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              {[1, 2, 3, 4, 5, 6].map((week) => (
                <th
                  key={week}
                  onClick={() => handleWeekChange(week)}
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor:
                      selectedWeek === week ? "#007BFF" : "whitesmoke",
                    transition: "background-color 0.5s",
                    minWidth: "100px",
                  }}
                >
                  {x[week - 1]} <br />
                  (Week {week})
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "200px",
                backgroundColor: "#007BFF",
                color: "#fff",
              }}
            >
              Days
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                backgroundColor: "#007BFF",
                color: "#fff",
              }}
            >
              Topics
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "200px",
                backgroundColor: "#007BFF",
                color: "#fff",
              }}
            >
              Syllabus
            </th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "white" : "whitesmoke",
              }}
            >
              <td style={{ border: "1px solid black", padding: "8px" }}>{`Day ${
                index + 1
              }`}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {topicsByWeek[selectedWeek] &&
                  topicsByWeek[selectedWeek][index]}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  Width: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <button
                  onClick={() => handleViewDetails(index)}
                  className="syllabus-link"
                  style={{
                    display: "block",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "5px",
                    textDecoration: "none",
                    color: "#007BFF",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    border: "none",
                    transition: "background-color 0.3s",
                  }}
                >
                  Click Here to View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && (
        <Popup details={popupDetails} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Schedule;
