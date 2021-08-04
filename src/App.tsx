import React from "react";
import logo from "./logo.svg";
import ClusterMenue from "./components/ClusterMenue";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { MenuItem } from "@material-ui/core";
import Header from './components/Header';
import NavBar from './components/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OpenProject from "./pages/OpenProject";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import UserManual from "./pages/UserManual";

function App() {
  return (
   

    <div className="App">
      
    <Router>
    <NavBar />
    <Switch>
    <Route path='/OpenProject' component={OpenProject} />  
      <Route path='/Home'  component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Login' component={Login} />
      <Route path='/Settings' component={Settings} />
      <Route path='/UserManual' component={UserManual} />
    </Switch>
    </Router>

    </div>
  );
}

export default App;


