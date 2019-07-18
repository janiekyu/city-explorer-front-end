import React from "react";
import superagent from "superagent";
require('dotenv').config();

function Map(props) {

  return (

    <React.Fragment>
      <img id="map" className="hide" src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.loc.geometry.location.lat}%2c%20${props.loc.geometry.location.lng}&zoom=13&size=600x300&maptype=roadmap
  &key=${process.env.REACT_APP_GEOCODE_API_KEY}`} alt="Map of search query"></img>
  
    </React.Fragment>
  );
}

export default Map;
