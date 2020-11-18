import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from'./Header'
import Home from'./Home'
import Categorieslist from './Categorieslist'
import Mobilephone from "./Mobilephone";
import Cars from "./Cars";
import Motorcycle from "./Motorcycle";
import Houses from "./Houses";
import Jwellery from "./Jwellery";
import Login from "./Login";
import Footer from "./Footer";
import Firebase from "./Firebase";
import Fashion from "./Fashion";
function App() {
  return (

    <Router>
  
    <div className="App">
    
        
    <Switch>
 
    <Route path="/Firebase">
  <Header/>
  <Categorieslist/>
  <Firebase/>
</Route>



    <Route path="/Footer">
  <Header/>
  <Categorieslist/>
  <Footer/>
 
</Route>
<Route path="/Fashion">
  <Header/>
  <Categorieslist/>
  <Fashion/>
</Route>

    <Route path="/Login">
  <Header/>
  <Categorieslist/>
  <Login/>
</Route>

    <Route path="/Jwellery">
  <Header/>
  <Categorieslist/>
  <Jwellery/>
 
</Route>


    <Route path="/Houses">
  <Header/>
  <Categorieslist/>
  <Houses/>
 
</Route>
<Route path="/Motorcycle">
  <Header/>
  <Categorieslist/>
  <Motorcycle/>
 
</Route>
    <Route path="/Cars">
  <Header/>
  <Categorieslist/>
  <Cars/>
 
</Route>
    <Route path="/Mobilephone">
  <Header/>
  <Categorieslist/>
  <Mobilephone/>
 
</Route>
    <Route path="/check out">
      <Header/>
      <Categorieslist/>
      <h1>checkout</h1>
    </Route>
    <Route path="/login">
      <Header/>
      <h1> login page</h1>
    </Route>
    <Route path="/">
    <Header/>
<Categorieslist/>
<Route path="/">
  <Home/>
  <Footer/>
 
</Route>

</Route>

    </Switch>
    </div>
</Router>

  );
}

export default App;
