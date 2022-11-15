import React from "react";
import makeIT from "../images/makeIT.svg";

const MakeIT = () => {
  return (
    <div class="Container">
      <img
        src={makeIT}
        width="100%"
        alt="logo"
        height="400px"
        style={{ marginBottom: "-10px" }}
      />
      <div
        class="centeredIT"
        style={{
          fontFamily: "Assistant",
          fontWeight: "600",
          fontSize: "40px",
          color: "white",
          textTransform: "capitalize",
          top: "15%",
        }}
      >
        We Make IT
      </div>
      <div
        class="centeredIT"
        style={{
          fontFamily: "Assistant",
          fontWeight: "600",
          fontSize: "40px",
          color: "white",
          textTransform: "capitalize",
          top: "30%",
          marginTop: "0%",
        }}
      >
        Simple, Faster, And
      </div>
      <div
        class="centeredIT"
        style={{
          fontFamily: "Assistant",
          fontWeight: "600",
          fontSize: "40px",
          color: "white",
          textTransform: "capitalize",
          top: "45%",
          marginTop: "0%",
        }}
      >
        Less Expensive!
      </div>
      <div
        class="centeredIT"
        style={{
          color: "white",
          textTransform: "capitalize",
          top: "65%",
          marginTop: "0%",
          width: "10%",
        }}
      >
        <button
          type="button"
          class="btn btn-primary btn-sm"
          style={{
            color: "white",
            backgroundColor: "#F37024",
            borderColor: "#F37024",
            width: "100%",
            top: "60%",
            height: "5%",
            textAlign: "center",
            fontWeight: "500",
            borderRadius: "6px",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MakeIT;
