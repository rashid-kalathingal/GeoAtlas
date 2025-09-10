import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../redux/tabSlice";

export const NavBar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "all", label: "All" },
    { id: "asia", label: "Asia" },
    { id: "europe", label: "Europe" },
  ];

  const handleTabClick = (id) => {
    dispatch(setActiveTab(id));
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold text-dark ps-2"
          href="#"
          style={{ fontSize: "1.6rem" }}
        >
          Countries
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ padding: "0.2rem 0.4rem" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`nav-link px-2 py-1 ${
                  activeTab === tab.id
                    ? `text-primary fw-bold ${
                        !isOpen ? "border-bottom border-2 border-primary" : ""
                      }`
                    : "text-secondary"
                }`}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "0.85rem",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
