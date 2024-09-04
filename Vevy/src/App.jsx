import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";


const App = () =>{
  return(
        <React.Fragment>
          <Navbar/>
          <Homepage/>
        </React.Fragment>
  );
}


export default App;