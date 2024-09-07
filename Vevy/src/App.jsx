import React, { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage";
import Preloader from "./Components/preloader";

const App = () =>{

  const [loading,Setloading] = useState(true);

  useEffect(()=>{
    const loadtimeout=setTimeout(()=>{
      Setloading(false);
    },5000)
    return () => clearTimeout(loadtimeout);
  },[])

  return(
        <div>
          {loading ? <Preloader /> : <Homepage />}
        </div>
  );
}


export default App;