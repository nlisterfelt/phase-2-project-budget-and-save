import React, {useState} from "react";

function NewBudget({categories}){
    const [formData, setFormData]=useState({
        name: '',
        date: 0,
        amount: 0,
        category: 'Income'
    })
    const categoriesJSX = categories.map(categoryOption=><option value={categoryOption} key={categoryOption}>{categoryOption}</option>)
    
    function handleFormSubmit(e){
        e.preventDefault()
    }
    function handleInputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div> 
            <h3>New Budget Item Form</h3>
            <p>Add a new item to your budget.</p>
            <form id="new-budget-form" onSubmit={handleFormSubmit}>
                <label >Date - Enter a number 1-31</label>
                <input id='newDate' pattern='[0-9]' type='number' name='date' placeholder="3" value={formData.date} onChange={handleInputChange}/>
                <label >Description</label>
                <input id='newDescription' type='text' name='name' placeholder="Paycheck 1" value={formData.name} onChange={handleInputChange}/>
                <label >Amount</label>
                <input id='newAmount' type='number' name='amount' placeholder="1050" value={formData.amount} onChange={handleInputChange}/>
                
                <label >Select a category</label>
                <select id='newCategory' name='category' value={formData.category} onChange={handleInputChange}>
                    {categoriesJSX}
                </select>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default NewBudget