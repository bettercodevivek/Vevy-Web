import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/Landing";

const App = () =>{
  return(
        <React.Fragment>
          <Navbar/>
          <LandingPage/>
        </React.Fragment>
  );
}


export default App;