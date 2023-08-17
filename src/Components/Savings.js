import React from "react";
import SavingsCard from "./SavingsCard";

function Savings({goals}){
    console.log(goals)
    const savingsGoal = goals.map(goal=><SavingsCard key={goal.description} goal={goal}/>)
    return (
        <div>
            <h2>Savings Goals</h2>
            {savingsGoal}
        </div>
    )
}

export default Savings