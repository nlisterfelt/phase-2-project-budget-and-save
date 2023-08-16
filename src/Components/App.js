import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Savings from './Savings';
import Budget from './Budget';
import NewBudget from './NewBudget';
import Home from './Home';
import NewSavings from "./NewSavings";

function App() {
  const [budgetItems, setBudgetItems] = useState([])
  const [totalIncome, setTotalIncome]=useState(0)
  const [totalSpent, setTotalSpent]=useState(0)
  const [goals, setGoals]=useState([])
  const categories = ['Income', 'Savings', 'Expenses', 'Food', 'Miscellaneous']

  useEffect(()=>{
    fetch('http://localhost:3000/budget')
    .then(resp=>resp.json())
    .then(data=>{
      setBudgetItems(data)
      data.forEach(item=>handleAddAmount(item))
    })

    fetch('http://localhost:3000/goals')
    .then(resp=>resp.json())
    .then(data=>setGoals(data))
  }, [])
  function handleAddAmount(item){
    if(item.category==='Income'){
      setTotalIncome(totalIncome+item.amount)
    } else {
      setTotalSpent(totalSpent+item.amount)
    }
  }
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/savings'>
          <Savings goals={goals}/>
        </Route>
        <Route path='/savings/new'>
          <NewSavings />
        </Route>
        <Route path='/budget/new'>
          <NewBudget categories={categories} onBudgetFormSubmit/>
        </Route>
        <Route exact path='/budget'>
          <Budget budgetItems={budgetItems} categories={categories} totalIncome={totalIncome} totalSpent={totalSpent}/>
        </Route>
        <Route path='*'>
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
