import React from "react";
import superagent from "superagent";

import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Map from "./Map.js";
import SearchResult from "./SearchResult.js";
import geo from "./data/geo.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: geo.results[0],

      formatted_address: 'Test', 
      lat: 12,
      lng: 23
    };
  }

  updateLocation = location =>{
    this.setState (location);
  }

  render() {
    
    return (
      <React.Fragment>
        <Header />
        <SearchForm updateLocation={this.updateLocation} />
        <Map loc={this.state.loc} />
        <p>Here are the results for{this.state.formatted_address}.</p>
        <SearchResult />
      </React.Fragment>
    );
  }
}

export default App;
