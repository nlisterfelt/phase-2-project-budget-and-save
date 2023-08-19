import React, {useState} from "react";

function SavingsCard({goal, onSavingsDelete, onSavingsEdit}){
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
    function handleEditChange(e){
        console.log(parseInt(e.target.value)<=goal.amount)
        if(e.target.value===''){
            setNewSaved('')
        } else if(parseInt(e.target.value)<=goal.amount){
            setNewSaved(parseInt(e.target.value))
        }
    }
    function handleEditSubmit(e){
        e.preventDefault()
        const numb=parseInt(newSaved)
        fetch(`http://localhost:3000/goals/${goal.id}`, {
            method: 'PATCH', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                saved: numb
            })
        })
        .then(resp=>resp.json())
        .then(data=>{
            onSavingsEdit({...goal, saved: numb})
        })
        setIsEdit(false)
    }

    return (
        <div >
            <h3>
                {goal.description}
                <button className='editDelete' onClick={e=>setIsEdit(true)}>Edit</button>
                <button className='editDelete' onClick={handleDelete}>X</button>
            </h3> 
            
            <p>Goal amount: {goal.amount}  /  Saved: {goal.saved}  /  Percent saved: {percentageComplete}%</p>
            {isEdit ? <form onSubmit={handleEditSubmit}>
                <label>New saved amount:</label>
                <input type='number' value={newSaved} onChange={handleEditChange}></input>
                <button>Submit</button>
            </form> : null}
            <div className="goal-box">
                <div style={newStyle}></div>
            </div>
        </div>
    )
}

export default SavingsCard