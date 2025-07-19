import { useState } from 'react';

const StarshipSearch = ({ 
  onSearch, 
  onReset, 
  resultsCount, 
  lastSearchQuery 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    onSearch(searchTerm);
    
 
    setSearchTerm('');
  };

  const handleReset = () => {
    setSearchTerm('');
    onReset();
  };

  return (
    <div className="search-container">

      <div className="search-meta">
        <p>Showing {resultsCount} results</p>
        <p>
          {lastSearchQuery 
            ? `Last search: "${lastSearchQuery}"` 
            : "Search for a starship by name."
          }
        </p>
      </div>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter starship name..."
          required
        />
        <button type="submit">Search</button>
        

        {lastSearchQuery && (
          <button type="button" onClick={handleReset}>
            Show all starships
          </button>
        )}
      </form>
    </div>
  );
};

export default StarshipSearch;

