import React, { useState } from "react";
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog, onHideHog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <Card className="ui eight wide column" onClick={handleClick}>
      <img src={hog.image} alt={hog.name} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        {showDetails && (
          <Card.Description>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
            <button onClick={() => onHideHog(hog.name)}>Hide Hog</button>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
};

export default HogTile;
