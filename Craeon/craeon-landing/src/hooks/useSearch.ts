import { useState, useEffect } from 'react';

const useSearch = (initialQuery = '') => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setResults(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    return { query, setQuery, results, loading, error };
};

export default useSearch;