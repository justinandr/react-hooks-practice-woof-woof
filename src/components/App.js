import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import Filter from "./Filter";
import Summary from "./Summary";

function App() {

  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(data => setDogs(data))
  }, [])

  function handleDogSelect(selected) {
    setSelectedDog(selected)
  }

  function handleUpdateDog(updatedDog) {
    const updatedDogs = dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
    setDogs(updatedDogs)
    setSelectedDog({...selectedDog, isGoodDog: !selectedDog.isGoodDog})
  }

  return (
    <div className="App">
      <Filter />
      <DogBar dogs={dogs} onDogClick={handleDogSelect} />
      <Summary dog={selectedDog} onUpdateDog={handleUpdateDog} />
    </div>
  );
}

export default App;
