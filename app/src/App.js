import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Posts from "./Pages/Posts";

// styles
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
