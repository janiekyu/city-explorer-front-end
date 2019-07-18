import React from "react";
import superagent from "superagent";

import Header from "./Header.js";
import SearchForm from "./SearchForm.js";
import Map from "./Map.js";
import SearchResult from "./SearchResult.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResult />
      </React.Fragment>
    );
  }
}

export default App;
