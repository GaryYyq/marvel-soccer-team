import { useState, useEffect } from 'react';

export const useMarvelData = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1704921927&limit=100&apikey=c02919a3f0082d67aa44d9befabe3eed&hash=d1c6e595a2d0a01bce1111d536be48d1')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { data, isLoading, error };
};
