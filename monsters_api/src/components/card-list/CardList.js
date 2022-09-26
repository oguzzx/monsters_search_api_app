import React from "react";
import Card from "../card/Card";
import "./cardList.css";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
