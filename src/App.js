import Pokedex from "./Pokedex";
import pokemon from "./pokemon";
import "./App.css";

function App() {
  return (
    <div>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
