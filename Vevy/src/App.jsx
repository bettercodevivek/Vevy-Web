import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/Landing";
import OurServices from "./Components/Services";

const App = () =>{
  return(
        <React.Fragment>
          <Navbar/>
          <LandingPage/>
          <OurServices/>
        </React.Fragment>
  );
}


export default App;