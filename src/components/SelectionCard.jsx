import React, { useState } from 'react';
import { useMarvelData } from './ExtractData';

function SelectionCard({ type, onNameSelect, selectedCharacters }) {

    const [selectedName, setSelectedName] = useState("");
    const { data, isLoading, error } = useMarvelData();

    function handleSelectName(event) {
        const name = event.target.value;
        const isSelectionSuccessful = onNameSelect(name, type);
        if (isSelectionSuccessful) {
            // If the selection is successful, update the local state
            setSelectedName(name);
        } else {
            // If the selection is not successful, reset the local state
            setSelectedName("");
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (

        <div>
            <h3>Select {type}: {selectedName}</h3>
            <select onChange={handleSelectName} value={selectedCharacters[type] || ''}>
                <option value="">Select a character</option>
                {data && data.data.results.map((character, index) => (
                    <option key={index} value={character.name} disabled={Object.values(selectedCharacters).includes(character.name)}>
                        {character.name}
                    </option>
                ))}
            </select>

        </div>
    );
}
export default SelectionCard;