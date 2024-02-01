import React from "react";
import { Link } from "react-router-dom";

function ShowList({ shows }) {
  return (
    <ul>
      {shows.map((show) => (
        <li key={show.show.id}>
          <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ShowList;
