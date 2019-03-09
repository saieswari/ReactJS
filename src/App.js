import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Employeelist from '../src/Components/Employeelist';
import Dashboard from '../src/Components/Dashboard';
import Assetlist from '../src/Components/Assetlist';
import Employeeasset from '../src/Components/Employeeasset';
import CreateEmployee from'./Components/CreateEmployee';
import AddEmployeeAsset from './Components/Addemployeeasset';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//import Navigation from './Components/Navigation';
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <Route exact strict path="/" component={Dashboard} />
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/assetlist" component={Assetlist} />
          <Route exact strict path="/employeelist" component={Employeelist} />
          <Route exact strict path="/employeeasset" component={Employeeasset} />
          <Route exact strict path="/createemployee" component={CreateEmployee } />
          <Route exact strict path="/addemployeeasset" component={AddEmployeeAsset}  />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
