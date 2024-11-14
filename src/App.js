import { useState } from "react";
import "./App.css";
import ShowAnimal from "./ShowAnimal";

function App() {
  const [animalsList, setAnimalsList] = useState([]);
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  const handleAddAnimal = () => {
    setAnimalsList([...animalsList, getRandomAnimal()]);
  };
  const getRandomAnimal = () => {
    return animals[Math.floor(Math.random() * animals.length)];
  };
  return (
    <>
      <div className="button-container">
        <button onClick={handleAddAnimal}>Add Animal</button>
      </div>
      <div className="animal-list">
        {animalsList.map((animal, index) => (
          <ShowAnimal animalToShow={animal} key={index} />
        ))}
      </div>
    </>
  );
}
export default App;
