import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Routes from './Routes';


const browserHistory = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <>
        <Router history={browserHistory} >
          <Routes />
        </Router>
      </>
    )
  }
}

export default App

