import React, {useState} from "react";

function SavingsCard({goal, onSavingsDelete}){
    const [newSaved, setNewSaved]=useState(goal.saved)
    const [isEdit, setIsEdit]=useState(false)
    const percentageComplete = goal.saved/goal.amount*100
    const newStyle = {
        backgroundColor: "rgb(0, 128, 0)",
        width: percentageComplete+"%",
        height: "20px"
    }
    function handleDelete(){
        fetch(`http://localhost:3000/goals/${goal.id}`, {
            method: 'DELETE'
        })
        onSavingsDelete(goal.id)
    }
    function handleEdit(){
        fetch(`http://localhost:3000/goals/${goal.id}`, {
            method: 'PATCH', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({

            })
        })
    }
    return (
        <div >
            <h3>
                {goal.description}
                <button className='editDelete' onClick={handleEdit}>Edit</button>
                <button className='editDelete' onClick={handleDelete}>X</button>
            </h3> 
            
            <p>Goal amount: {goal.amount}  /  Saved: {goal.saved}  /  Percent saved: {percentageComplete}%</p>
            <form>
                <label>New saved amount:</label>
                <input></input>
            </form>
            <div className="goal-box">
                <div style={newStyle}></div>
            </div>
        </div>
    )
}

export default SavingsCard