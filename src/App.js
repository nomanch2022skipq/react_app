import React from "react";
import F1 from "./F1";
import F2 from "./F2";
import { Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavLink to={"/"}> F1_page</NavLink>
      <NavLink to={"/f2"}> F2_page</NavLink>

      <h1>
        Header
      </h1>
      <Routes>
        <Route path="/" exact Component={F1} />
        <Route path="/f2" exact Component={F2} />
        <Route path="*" Component={() => <h1>OOP! Page not find</h1>} />
      </Routes>
      <h1>Footer</h1>
    </>
  );
};

export default App;
