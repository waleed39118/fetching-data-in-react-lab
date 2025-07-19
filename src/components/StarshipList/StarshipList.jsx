import StarshipCard from '../StarshipCard/StarshipCard.jsx';

const StarshipList = ({ starships }) => {

  if (!starships || starships.length === 0) {
    return (
      <section>
        <p>Loading starships...</p>
      </section>
    );
  }

  return (
    <section>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard 
            key={starship.url || index} 
            starship={starship} 
          />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
