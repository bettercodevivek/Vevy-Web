import React from "react";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";


const App = () =>{
  return(
        <div className="webkit">
          <Navbar/>
          <Homepage/>
        </div>
  );
}


export default App;