import React from "react";

function NewEntryForm(){
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <div> 
            <h3>New Budget Item Form</h3>
            <p>Add a new item to your budget.</p>
            <form id="new-entry-form" onSubmit={handleFormSubmit}>
                <label for='newDate'>Date - Enter a number 1-31</label>
                <input id='newDate' pattern='[0-9]' type='number' placeholder="3" />
                <label for='newDescription'>Description</label>
                <input id='newDescription' type='text' placeholder="Paycheck 1"/>
                <label for='newAmount'>Amount</label>
                <input id='newAmount' type='number' placeholder="1050"/>
                
                <label for='newCategory'>Select a category</label>
                <select id='newCategory'>
                    <option value='income'>Income</option>
                    <option value='savings'>Savings</option>
                    <option value='expenses'>Fixed Expenses</option>
                    <option value='food'>Food</option>
                    <option value='misc'>Miscellaneous</option>
                </select>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewEntryForm