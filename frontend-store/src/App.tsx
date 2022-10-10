import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrimaryHeaderAppBar from "./components/Header/header";
import HomePage from "./components/Pages/HomePage";

export default function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <PrimaryHeaderAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
