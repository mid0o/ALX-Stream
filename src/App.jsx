import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import MoviePage from "./Screens/Movie";
import Anime from "./Screens/Anime";
import SingleMovie from "./Screens/SingleMovie";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/Movis" element={<MoviePage />} />
      <Route path="/Movis/:id" element={<SingleMovie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Anime" element={<Anime />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
