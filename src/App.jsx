import React, { useState } from 'react';
import SelectionCard from './components/SelectionCard';
import './App.css';
import AdditionalCard from './components/AdditionalCard';


function App() {

  const [selectedCharacters, setSelectedCharacters] = useState({
    GK: null,
    ST: null,
    MD: null,
    DF: null,
    Additional: null
  });

  const handleSelectCharacter = (characterName, role) => {
    console.log(characterName);
    if (typeof role === 'object') {
      role = role.type;
    }

    console.log(role);
    setSelectedCharacters((prevCharacters) => {
      // Remove the character from all roles
      const newCharacters = Object.keys(prevCharacters).reduce((acc, key) => {
        if (prevCharacters[key] === characterName) {
          acc[key] = null;
        } else {
          acc[key] = prevCharacters[key];
        }
        return acc;
      }, {});

      // Assign the character to the new role
      newCharacters[role] = characterName;

      return newCharacters;
    });
  };

  return (
    <>
      <h1>Marvel Soccer Team</h1>
      <div className="cards-container">
        <SelectionCard type="GK" onNameSelect={handleSelectCharacter} selectedCharacters={selectedCharacters} />
        <SelectionCard type="ST" onNameSelect={handleSelectCharacter} selectedCharacters={selectedCharacters} />
        <SelectionCard type="MD" onNameSelect={handleSelectCharacter} selectedCharacters={selectedCharacters} />
        <SelectionCard type="DF" onNameSelect={handleSelectCharacter} selectedCharacters={selectedCharacters} />
        <AdditionalCard onSelectCharacter={handleSelectCharacter} selectedCharacters={selectedCharacters} />
      </div>
      <div className="share-links">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.marvelsoccerteam.com" target="_blank" class="facebook">Share on Facebook</a>
        <a href="https://twitter.com/intent/tweet?text=Your%20Share%20Text&url=https%3A%2F%2Fwww.marvelsoccerteam.com" target="_blank" class="twitter">Share on Twitter</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.example.com" target="_blank" class="linkedin">Share on LinkedIn</a>

      </div>
    </>
  )

}

export default App;

