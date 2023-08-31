import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Netflix from "./Components/NetflixMovies/Netflix";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Amazon from "./Components/AmazonMovies/Amazon";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact Component={Home} />
          <Route path="/amazon" exact Component={Amazon} />
          <Route path="/netflix" exact Component={Netflix} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
