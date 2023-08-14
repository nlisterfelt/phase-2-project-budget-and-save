import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Savings from './Savings';
import Budget from './Budget';
import NewEntryForm from './NewEntryForm';

function App() {
  const [budgetItems, setBudgetItems] = useState([])
  const [category, setCategory]=useState('all')

  useEffect(()=>{
    fetch('http://localhost:3000/budget')
    .then(resp=>resp.json())
    .then(data=>setBudgetItems(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/savings'>
          <Savings />
        </Route>
        <Route path='/newentryform'>
          <NewEntryForm />
        </Route>
        <Route exact path='/'>
          <Budget budgetItems={budgetItems}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
