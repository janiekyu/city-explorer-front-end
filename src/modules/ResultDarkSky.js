import React from "react";
import darksky from "../data/darksky.json";

function ResultDarkSky(props) {
  const dailyWeatherData = [];

  for (let i = 0; i < 8; i++) {
    dailyWeatherData.push([
      darksky.daily.data[i].time,
      darksky.daily.data[i].summary
    ]);
  }

  return (
    <React.Fragment>
      <h3>Results from the Dark Sky API</h3>
      <ul className="forecast-list">
        {dailyWeatherData.map((innerArr,i) => {
          return (
            <li key={`forecast${i}`}>
              The forecast for {innerArr[0]} is: {innerArr[1]}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ResultDarkSky;
