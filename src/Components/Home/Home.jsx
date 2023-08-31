import React from "react";
import image from "../../images/Home_cinema.gif";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeleft">
            <h2>Welcome To <span>Movies</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam earum obcaecati. Earum, molestiae deleniti reiciendis tempora necessitatibus neque voluptates perferendis, sint placeat ut reprehenderit ratione qui unde itaque facere.</p>
            <button type="button">Get Started</button>
        </div>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Home;
