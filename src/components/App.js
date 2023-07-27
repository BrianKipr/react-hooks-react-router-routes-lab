// // import React from "react";
// // import { Route, Switch } from "react-router-dom";
// // import NavBar from "./NavBar";
// // import Home from "./Home";
// // import Actors from "./Actors";
// // import Directors from "./Directors";
// // import Movies from "./Movies";

// // function App() {
// //   return <div>{/*{code here}*/}</div>;
// // }

// // export default App;

// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { BrowserRouter } from "react-router-dom";
// // import App from "./components/App";

// // ReactDOM.render(
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>,
// //   document.getElementById("root")
// // );



// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Home from "./Home";
// // import About from "./About";
// // import Login from "./Login";
// // import NavBar from "./NavBar";

// // function App() {
// //   return (
// //     <div>
// //       <NavBar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/login" element={<Login />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;




import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
        {/* Add more routes here if needed */}
      </Switch>
    </div>
  );
}

export default App;
