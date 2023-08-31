import React from "react";
import "./Amazon.css";
import Movies from "./AMovies";

const MainAPP = (props) => {
  return (
    <div className="main">
      {Movies.map((movie) => {
        return (
          <div className="card">
            <img src={movie.img} alt="" />
            <div className="card_discription">
              <h2>{movie.title}</h2>
              <a href={movie.movieUrl} target="_">
                Watch Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainAPP;
