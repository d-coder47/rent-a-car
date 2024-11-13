import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Reservation from "../pages/Reservation";
import Car from "../pages/Car";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/reservation/:id?" element={<Reservation />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
