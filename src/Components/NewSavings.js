import React, {useState} from "react";

function NewSavings(){
    const [savingsFormData, setSavingsFormData]=useState({
        goal: '',
        amount: 0,
        saved: 0
    })
    function handleInputChange(e){
        setSavingsFormData({...savingsFormData, [e.target.name]: e.target.value})
    }
    function handleFormSubmit(){

    }
    return (
        <div> 
            <h3>New Savings Goal Form</h3>
            <p>Add a new item to your budget.</p>
            <form id="new-goal-form" onSubmit={handleFormSubmit}>
                <label >Goal name</label>
                <input id='newGoal' type='text' name='name' placeholder="Vacation" value={savingsFormData.goal} onChange={handleInputChange}/>
                <label >Date - Enter a number 1-31</label>
                <input id='newGoalAmount' pattern='[0-9]' type='number' name='amount' placeholder="100" value={savingsFormData.amount} onChange={handleInputChange}/>
                <label >Amount</label>
                <input id='newGoalSaved' pattern='[0-9]' type='number' name='saved' placeholder="0" value={savingsFormData.saved} onChange={handleInputChange}/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewSavings