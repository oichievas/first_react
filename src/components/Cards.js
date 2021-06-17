import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="https://images.pexels.com/photos/1029021/pexels-photo-1029021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="All women loves flowers.Just give her this happiness "
              label="Travel"
              path="/product"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.pexels.com/photos/6604701/pexels-photo-6604701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Place were born romantic nights and love"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="https://images.pexels.com/photos/1010646/pexels-photo-1010646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Amazing swiming pool"
              label="Travel"
              path="/services"
            />
            <CardItem
              src="https://images.pexels.com/photos/221532/pexels-photo-221532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              text="Santotini is island in Greece"
              label="Travel"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
