import React from "react";
import freeconsultation from "../images/freeconsultation.png";

const Consultation = () => {
  return (
    <div class="Container">
      <img
        src={freeconsultation}
        width="100%"
        alt="logo"
        height="200px"
        style={{ backgroundColor: "#F37024", marginBottom: "-6px" }}
      />

      <div
        class="centered"
        style={{
          fontFamily: "Assistant",
          fontWeight: "600",
          fontSize: "40px",
          color: "white",
          textTransform: "capitalize",
          top: "30%",
        }}
      >
        there are many other things we can do
      </div>
      <div
        class="centered"
        style={{
          fontFamily: "Assistant",
          fontWeight: "50",
          fontSize: "27px",
          color: "white",
          textTransform: "capitalize",
          marginTop: "-3.5%",
        }}
      >
        get started to talk with us & get infinite services & free consultation.
      </div>
    </div>
  );
};

export default Consultation;
