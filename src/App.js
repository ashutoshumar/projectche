import React from "react";
import HomeScreen from "./HomeScreen";
import Upload from "./Components/Upload";
import { Route,Routes , Navigate,Link} from "react-router-dom"
function App() {
  return (
    <>
     <Routes >
            <Route exact path="/">
               <HomeScreen/>            
           </Route>
           <Route exact path="/about">
             About
           </Route>
           <Route exact path="/contact">
             Contact
           </Route>
           <Route exact path="/services">Services
              
           </Route>
           <Route exact path="/Upload">
              <Upload/>
           </Route>
           
           <Route>
               < Navigate to="/"/>
           </Route>
            </Routes >
    </>
  );
}

export default App;
