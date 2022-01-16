import React from "react";
import HomeScreen from "./HomeScreen";
import Upload from "./Components/Upload";
import { Route,Switch,Redirect,Link} from "react-router-dom"
function App() {
  return (
    <>
     <Switch>
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
               <Redirect to="/"/>
           </Route>
            </Switch>
    </>
  );
}

export default App;
