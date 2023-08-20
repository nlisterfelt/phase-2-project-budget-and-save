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
  let startIncome=0
  let startSpent=0
  useEffect(()=>{
    fetch('http://localhost:3000/budget')
    .then(resp=>resp.json())
    .then(data=>{
      setBudgetItems(data)
      data.forEach(item=>{
        if(item.category==='Income'){
          startIncome+=item.amount
        } else {
          startSpent+=item.amount
        }
      })
      setTotalIncome(startIncome)
      setTotalSpent(startSpent)
    })
    fetch('http://localhost:3000/goals')
    .then(resp=>resp.json())
    .then(data=>setGoals(data))
  }, [])


  
  function handleSavingsSubmit(data){
    setGoals([...goals, data])
  }
  function handleSavingsDelete(id){
    const newGoals=goals.filter(goal=>goal.id!==id)
    setGoals(newGoals)
  }
  function handleSavingsEdit(updatedGoal){
    const newGoals = goals.map(goal=>{
      if(goal.id===updatedGoal.id){
        return updatedGoal
      } else {
        return goal
      }
    })
    setGoals(newGoals)
  }

  function handleBudgetSubmit(item){
    if(item.category==='Income'){
      setTotalIncome(totalIncome+item.amount)
    } else {
      setTotalSpent(totalSpent+item.amount)
    }
    setBudgetItems([...budgetItems, item])
  }
  function handleBudgetItemDelete(id){
    const newBudgetItems=budgetItems.filter(item=>item.id!==id)
    setBudgetItems(newBudgetItems)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/savings'>
          <Savings goals={goals} onSavingsDelete={handleSavingsDelete} onSavingsEdit={handleSavingsEdit}/>
        </Route>
        <Route path='/savings/new'>
          <NewSavings onSavingsSubmit={handleSavingsSubmit}/>
        </Route>
        <Route path='/budget/new'>
          <NewBudget categories={categories} onBudgetSubmit={handleBudgetSubmit} />
        </Route>
        <Route exact path='/budget'>
          <Budget budgetItems={budgetItems} categories={categories} totalIncome={totalIncome} totalSpent={totalSpent} onBudgetItemDelete={handleBudgetItemDelete}/>
        </Route>
        <Route path='*'>
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
