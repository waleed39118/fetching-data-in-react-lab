const StarshipCard = ({ starship }) => {
  return (
    <li className="starship-card">
      <h3>{starship.name}</h3>
      <div className="starship-details">
        <p><strong>Class:</strong> {starship.starship_class}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Model:</strong> {starship.model}</p>
      </div>
    </li>
  );
};

export default StarshipCard;
