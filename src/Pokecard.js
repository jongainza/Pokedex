import React from "react";

const Pokecard = ({ name, type, experience, img }) => {
  return (
    <div className="pokecard">
      <h3 className="pokecard-name">{name}</h3>
      <img className="pokecard-img" src={img} />
      <p className="pokecard-type">Type: {type}</p>
      <p className="pokecard-exp">EXP: {experience}</p>
    </div>
  );
};

export default Pokecard;
