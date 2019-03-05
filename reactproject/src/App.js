// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Employeelist from '../src/Components/Employeelist';
import Dashboard from '../src/Components/Dashboard';
import Assetlist from '../src/Components/Assetlist';
import iUpload from '../src/Components/iupload';
import CreateEmployee from'./Components/CreateEmployee';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <Route exact strict path="/" component={Dashboard} />
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/assetlist" component={Assetlist} />
          <Route exact strict path="/employeelist" component={Employeelist} />
          <Route exact strict path="/createemployee" component={CreateEmployee } />
          <Route exact strict path="/iupload" component={iUpload } />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
