import React from "react";

function DogBar({ dogs, onDogClick }) {
    return (
        <div id="dog-bar">
            {dogs.map(dog => (
                <span key={dog.id} onClick={() => onDogClick(dog)} >{dog.name}</span>
            ))}
        </div>
    )
}

export default DogBar