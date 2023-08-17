import React from "react";

function SavingsCard({goal}){
    const percentageComplete = goal.saved/goal.amount*100
    const newStyle = {
        backgroundColor: "rgb(0, 128, 0)",
        width: percentageComplete+"%",
        height: "20px"
    }
    return (
        <div >
            <h3>{goal.description}</h3>
            <p>Goal amount: {goal.amount}   Saved: {goal.saved}   Percent saved: {percentageComplete}%</p>
            <div className="goal-box">
                <div style={newStyle}></div>
            </div>
        </div>
    )
}

export default SavingsCard