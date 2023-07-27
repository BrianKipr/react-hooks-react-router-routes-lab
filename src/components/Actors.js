// import React from "react";
// import { actors } from "../data";

// function Actors() {
//   return <div>{/*{code here}*/}</div>;
// }

// export default Actors;



// import React from "react";
// import { actors } from "../data";

// function Actors() {
//   return (
//     <div>
//       <h1>List of Actors</h1>
//       <ul>
//         {actors.map((actor, index) => (
//           <li key={index}>
//             <h2>{actor.name}</h2>
//             <p>Age: {actor.age}</p>
//             <p>Best Movie: {actor.bestMovie}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Actors;




// function Actors() {
//   return (
//     <div>
//       <h2>Actors</h2>
//       <ul>
//         {actors.map((actor, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {actor.name},{" "}
//             <strong>Movies:</strong> {actor.movies.join(", ")}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Actors;


import React from "react";
import { actors } from "./data";

function Actors() {
  return (
    <div>
      <h2>Actors</h2>
      <ul>
        {actors.map((actor, index) => (
          <li key={index}>
            <strong>Name:</strong> {actor.name},{" "}
            <strong>Movies:</strong> {actor.movies.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Actors;






