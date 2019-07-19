import React from "react";
import events from "../data/events.json";

function ResultEvents(props) {
  return (
    <section>
      <h3>Results from the Eventbrite</h3>
      <p>
        <a href="{events[0].link}">{events[0].name}</a>
      </p>
      <p>{events[0].event_date}</p>
      <p>{events[0].summary}</p>

      <p>
        <a href="{events[0].link}">{events[1].name}</a>
      </p>
      <p>{events[1].event_date}</p>
      <p>{events[1].summary}</p>
    </section>
  );
}

export default ResultEvents;
