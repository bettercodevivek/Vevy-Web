import React from "react";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";


const App = () =>{
  return(
        <React.Fragment>
          <Navbar/>
          <Homepage/>
        </React.Fragment>
  );
}


export default App;