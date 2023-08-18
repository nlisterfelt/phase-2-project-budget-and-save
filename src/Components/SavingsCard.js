import React from "react";

function SavingsCard({goal, onSavingsDelete}){
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
    return (
        <div >
            <h3>{goal.description}</h3>
            <button /*onClick={onSavingsEdit}*/>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <p>Goal amount: {goal.amount}  /  Saved: {goal.saved}  /  Percent saved: {percentageComplete}%</p>
            <div className="goal-box">
                <div style={newStyle}></div>
            </div>
        </div>
    )
}

export default SavingsCard