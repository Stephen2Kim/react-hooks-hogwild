import React from "react";
import HogTile from "./HogTile";
import { Grid } from 'semantic-ui-react';

const HogList = ({ hogs, onHideHog }) => {
  return (
    <Grid className="ui grid container">
      {hogs.map(hog => (
        <HogTile key={hog.name} hog={hog} onHideHog={onHideHog} />
      ))}
    </Grid>
  );
};

export default HogList;
