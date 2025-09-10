import React from "react";

export const WelcomeCaption = () => {
  return (
    <div className="container my-3">
      <div
        className="d-none d-sm-flex w-100"
        style={{ alignItems: "flex-start", marginBottom: 25 }}
      >
        <div
          style={{
            borderTop: "3px solid #444",
            opacity: 0.7,
            width: "40%",
            position: "relative",
            top: "0.35em",
            marginRight: 10,
          }}
        />
        <h3
          className="fw-bold text-center m-0"
          style={{
            fontSize: "2.2em",
            letterSpacing: "1.6px",
            color: "#444",
            margin: "0 18px",
            lineHeight: 1,
          }}
        >
          WELCOME
        </h3>
        <div
          style={{
            borderTop: "3px solid #444",
            opacity: 0.7,
            width: "40%",
            position: "relative",
            top: "1.8em",
            marginLeft: 10,
          }}
        />
      </div>

      <div className="d-flex d-sm-none flex-column align-items-center w-100">
        <div
          style={{
            borderTop: "1.5px solid #444",
            opacity: 0.7,
            width: "100%",
            marginBottom: 10,
          }}
        />
        <h3
          className="fw-bold text-center m-0"
          style={{
            letterSpacing: "1.6px",
            fontSize: "1.6em",
            color: "#444",
          }}
        >
          WELCOME
        </h3>
        <div
          style={{
            borderTop: "1.5px solid #444",
            opacity: 0.7,
            width: "100%",
            marginTop: 10,
          }}
        />
      </div>
    </div>
  );
};
