import React from "react";

export const Footer = () => {
  return (
    <div
      className="d-flex flex-column align-items-center gap-2"
      style={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}
    >
      <div className="d-flex justify-content-center gap-2">
        {["google", "facebook", "linkedin", "twitter"].map((network) => (
          <span
            key={network}
            className="border rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: 36,
              height: 36,
              borderWidth: 2,
              fontSize: 18,
              color: "#333",
            }}
          >
            <i className={`bi bi-${network}`} />
          </span>
        ))}
      </div>

      <div className="text-center mt-1" style={{ color: "#555", fontSize: 14 }}>
        CountryAtlas@email.com
      </div>

      <div className="text-center" style={{ fontSize: 12, color: "#777" }}>
        © 2020 CountryAtlas. All rights reserved.
      </div>
    </div>
  );
};
