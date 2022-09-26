import React from "react";
import "./card.css";

function Card({ monster }) {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set=set26size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
