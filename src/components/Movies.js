// // import React from "react";
// // import { movies } from "../data";

// // function Movies() {
// //   return <div>{/*{code here}*/}</div>;
// // }

// // export default Movies;


import React from "react";
import { movies } from "./data";

function Movies() {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Title:</strong> {movie.title},{" "}
            <strong>Time:</strong> {movie.time} minutes,{" "}
            {/* <strong>Genres:</strong> {movie.genres.join(", ")} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
