import { useState, useEffect } from 'react';
import './App.css';
import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx';
import StarshipList from './components/StarshipList/StarshipList.jsx';
import { index } from './services/starshipService.js';

function App() {

  const [starshipsData, setStarshipsData] = useState([]);
  

  const [displayedStarships, setDisplayedStarships] = useState([]);
  

  const [lastSearchQuery, setLastSearchQuery] = useState('');
  

  const [isLoading, setIsLoading] = useState(true);


  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const starships = await index();
        setStarshipsData(starships);
        setDisplayedStarships(starships);
      } catch (err) {
        setError('Failed to load starships. Please try again later.');
        console.error('Error fetching starships:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarships();
  }, []);


  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setDisplayedStarships(starshipsData);
      setLastSearchQuery('');
      return;
    }

    const filteredStarships = starshipsData.filter(starship =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayedStarships(filteredStarships);
    setLastSearchQuery(searchTerm);
  };

  const handleResetSearch = () => {
    setDisplayedStarships(starshipsData);
    setLastSearchQuery('');
  };


  if (error) {
    return (
      <main>
        <h1>Star Wars Starships</h1>
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h1>Star Wars Starships</h1>
      
      <StarshipSearch
        onSearch={handleSearch}
        onReset={handleResetSearch}
        resultsCount={displayedStarships.length}
        lastSearchQuery={lastSearchQuery}
      />
      
      {isLoading ? (
        <div className="loading-message">
          <p>Loading starships from a galaxy far, far away...</p>
        </div>
      ) : (
        <StarshipList starships={displayedStarships} />
      )}
    </main>
  );
}

export default App;
