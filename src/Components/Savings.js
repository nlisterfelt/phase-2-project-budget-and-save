import React from "react";
import SavingsCard from "./SavingsCard";

function Savings({goals, onSavingsDelete}){
    const savingsGoal = goals.map(goal=><SavingsCard key={goal.id} goal={goal} onSavingsDelete={onSavingsDelete}/>)
    return (
        <div>
            <h2>Savings Goals</h2>
            {savingsGoal}
        </div>
    )
}

export default Savings