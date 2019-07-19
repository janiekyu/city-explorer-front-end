import React from "react";

import ResultDarkSky from "./modules/ResultDarkSky.js";
import ResultEvents from "./modules/ResultEvents.js";
import ResultYelp from "./modules/ResultYelp.js";
import ResultMovies from "./modules/ResultMovies.js";
import ResultHiking from "./modules/ResultHiking.js";

function SearchResult(props) {

  return (
    <div className="column-container">
      <ResultDarkSky />
      <ResultYelp />
      <ResultEvents />
      <ResultMovies />
      <ResultHiking />
    </div>
  );
}

export default SearchResult;
