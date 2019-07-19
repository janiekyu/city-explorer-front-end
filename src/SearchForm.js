import React from "react";
import geo from "./data/geo.json";
import superagent from "superagent";
require('dotenv').config();


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationObj: {}
    };
  }

  trackInput = (e)=>{
    this.setState({
      searchQuery: e.target.value
    });
    
  }

  /*setLocation = (googleResult) => {
    props.updateLocation({
      loc: googleResult.results[0],
      formatted_address: googleResult.results[0].formatted_address, 
      lat: googleResult.results[0].geometry.location.lat,
      lng: googleResult.results[0].geometry.location.lng
    })
  }*/

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log('from submit', this.state.searchQuery);
    getLocationObj(this.state.searchQuery);
    
  }


  render(){
    return (
      <React.Fragment>
        <input onChange = {this.trackInput}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </React.Fragment>
    );
    }
}

function getLocationObj (loc) {

  const locURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`;

  console.log(locURL);
  superagent.get(locURL)
    .then(result => {
      console.log('result from google', result.body);
      this.setState({
        locationObj: result.body
      });
      

    })
    .catch(e => {
      console.error(e);
    })
}

export default SearchForm;
