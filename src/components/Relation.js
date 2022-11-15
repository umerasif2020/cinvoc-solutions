import React from "react";

const Relation = () => {
  return (
    <div style={{ marginTop: "70px", marginBottom: "70px", height: "80px" }}>
      <div className="flex flex-row justify-around max-w-[1240px] items-center text-center mx-auto">
        <div
          class="col-5 text-4xl font-extrabold text-[#F37024]"
          style={{
            textTransform: "capitalize",
          }}
        >
          build a respected relation with us!
        </div>
        <div class="ml-11">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Email"
            className="pl-4 py-4 pr-20 text-3xl"
            style={{ backgroundColor: "#F0F0F0", borderColor: "#F0F0F0" }}
          />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-primary text-white bg-[#F37024] px-16 py-5 text-4xl font-extrabold"
            style={{
              color: "white",
              backgroundColor: "#F37024",
              borderColor: "#F37024",
              fontWeight: "500",
              borderRadius: "6px",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relation;
