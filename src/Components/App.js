import React from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Savings from './Savings';
import Budget from './Budget';
import Breakdown from './Breakdown';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/savings'>
          <Savings />
        </Route>
        <Route path='/breakdown'>
          <Breakdown />
        </Route>
        <Route exact path='/'>
          <Budget />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
