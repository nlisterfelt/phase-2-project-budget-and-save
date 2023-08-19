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
    function handleEditSubmit(){
        fetch(`http://localhost:3000/goals/${goal.id}`, {
            method: 'PATCH', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({

            })
        })
    }
    console.log(newSaved)
    return (
        <div >
            <h3>
                {goal.description}
                <button className='editDelete' onClick={e=>setIsEdit(true)}>Edit</button>
                <button className='editDelete' onClick={handleDelete}>X</button>
            </h3> 
            
            <p>Goal amount: {goal.amount}  /  Saved: {goal.saved}  /  Percent saved: {percentageComplete}%</p>
            {isEdit ? <form>
                <label>New saved amount:</label>
                <input type='number' value={newSaved} onChange={e=>setNewSaved(e.target.value)}></input>
                <button>Submit</button>
            </form> : null}
            <div className="goal-box">
                <div style={newStyle}></div>
            </div>
        </div>
    )
}

export default SavingsCard