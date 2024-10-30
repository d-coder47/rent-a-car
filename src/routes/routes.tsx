import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Car from "../pages/Car";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
