import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { useLocation, Link } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios.get(`videos/?search=${query}`)
        .then(res => setResults(res.data))
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 && <p>No results found.</p>}
      {results.map(video => (
        <div key={video.id}>
          <h4>{video.title}</h4>
          <Link to={`/video/${video.id}`}>Watch</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
