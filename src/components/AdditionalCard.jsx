import React, { useState } from 'react';
import { useMarvelData } from './ExtractData';
import SelectionCard from './SelectionCard';

function AdditionalCard({ onSelectCharacter, selectedCharacters }) {
    const [type, setType] = useState("");
    const [name, setName] = useState(""); // Local state for selected name
    const [selectedName, setSelectedName] = useState("");

    const { data, isLoading, error } = useMarvelData();

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setName(""); // Reset name when type changes
    };

    const handleNameSelect = (selectedName) => {
        setName(selectedName); // Update the local state with the selected name
        onSelectCharacter(selectedName, { type }); // Call the parent component's function
    };

    function handleSelectName(event) {
        const name = event.target.value;
        setSelectedName(name);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div>
            <select value={type} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                <option value="Additional player">GK</option>
                <option value="Additional player">ST</option>
                <option value="Additional player">MD</option>
            </select>
            <SelectionCard 
                key="A1" 
                type={type} 
                onNameSelect={handleNameSelect} // Use the local function
                selectedCharacters={selectedCharacters} 
            />
        </div>
    );
}

export default AdditionalCard;
