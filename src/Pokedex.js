import React from "react";
import Pokecard from "./Pokecard";
import "./Pokecard.css";

const Pokedex = (props) => {
  let pokemon = props.pokemon;
  return (
    <div>
      <h2 className="title">Pokedex</h2>
      <div>
        {pokemon.map((i) => (
          <Pokecard
            name={i.name}
            type={i.type}
            experience={i.base_experience}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.id}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
