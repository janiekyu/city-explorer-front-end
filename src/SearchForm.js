import React from "react";
import geo from "./data/geo.json";

function SearchForm(props) {

  return (
    <React.Fragment>

      <input />
      <button onClick={()=>{
        props.updateLocation({
          loc: geo.results[0],
          formatted_address: geo.results[0].formatted_address, 
          lat: geo.results[0].geometry.location.lat,
          lng: geo.results[0].geometry.location.lng
        })
      }}>Search</button>
    </React.Fragment>
  );
}

export default SearchForm;
