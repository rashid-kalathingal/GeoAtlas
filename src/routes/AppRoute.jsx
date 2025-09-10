import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingScreen } from "../screens/LandingScreen";
import { DashBoard } from "../screens/DashBoard";
import NotFound from "../screens/NotFound";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<DashBoard />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};
