import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/Landing";
import OurServices from "./Components/Services";
import Testimonials from "./Components/Testimonials";

const App = () =>{
  return(
        <React.Fragment>
          <Navbar/>
          <LandingPage/>
          <OurServices/>
          <Testimonials/>
        </React.Fragment>
  );
}


export default App;