// // import React from "react";
// // import { directors } from "../data";

// // function Directors() {
// //   return <div>{/*{code here}*/}</div>;
// // }

// // export default Directors;


import React from "react";
import { directors } from "./data";

function Directors() {
  return (
    <div>
      <h2>Directors</h2>
      <ul>
        {directors.map((director, index) => (
          <li key={index}>
            <strong>Name:</strong> {director.name},{" "}
            <strong>Movies:</strong> {director.movies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directors;
