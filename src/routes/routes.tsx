import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Reservation from "../pages/Reservation";
import Car from "../pages/Car";
import { sanityClient } from "../lib/client";
import { useCar } from "../context/CarContext";

const AppRoutes: React.FC = () => {
  const { cars, updateCars } = useCar();

  useEffect(() => {
    const getCarsFromDatabase = async () => {
      const query = '*[_type == "car"]';
      const cars = await sanityClient.fetch(query);
      updateCars(cars);
      return cars;
    };
    if (cars?.length === 0) {
      console.log("Getting cars...");
      getCarsFromDatabase();
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/reservation/:id?" element={<Reservation />} />
        <Route path="/car/:slug" element={<Car />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
