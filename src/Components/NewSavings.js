import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function NewSavings({onSavingsSubmit}){
    const history = useHistory()
    const [savingsFormData, setSavingsFormData]=useState({
        description: '',
        amount: 0,
        saved: 0
    })
    function handleInputChange(e){
        if(e.target.type==='number'){
            if(e.target.value===''){
                setSavingsFormData({...savingsFormData, [e.target.name]: ''})
            } else {
            const numb = parseInt(e.target.value, 10)
            setSavingsFormData({...savingsFormData, [e.target.name]: numb})
            }
        } else {
            setSavingsFormData({...savingsFormData, [e.target.name]: e.target.value})
        }
    }
    function handleFormSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/goals', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(savingsFormData)
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            //onSavingsSubmit([...savingsFormData, ...data])
            //history.push('/savings')
        })
    }
    return (
        <div> 
            <h3>New Savings Goal Form</h3>
            <p>Add a new item to your budget.</p>
            <form id="new-goal-form" onSubmit={handleFormSubmit}>
                <label >Goal name</label>
                <input id='newGoal' type='text' name='description' placeholder="Vacation" value={savingsFormData.description} onChange={handleInputChange}/>
                <label >Amount you want to save</label>
                <input id='newGoalAmount' pattern='[0-9]' type='number' name='amount' placeholder="100" value={savingsFormData.amount} onChange={handleInputChange}/>
                <label >Amount saved so far</label>
                <input id='newGoalSaved' pattern='[0-9]' type='number' name='saved' placeholder="0" value={savingsFormData.saved} onChange={handleInputChange}/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewSavings