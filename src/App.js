import React from "react";
// import Covid from "./components/covid.js";
// import Login from "./loginPage";
// import FoodData from "./foodData.js";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import "./index.css";

const App = () => {
  return (
    <div>
      {/* <FoodData/> */}
      {/* <Login/>
      <Covid/> */}
      <h1 className ="container"> Restaurant</h1>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/food-power.glitch.me/restaurant/:productId" exact component={ProductDetails}/>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App