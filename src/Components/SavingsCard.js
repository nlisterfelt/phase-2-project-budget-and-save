import React from "react";

function SavingsCard({goal}){
    return (
        <div >
            <h3>{goal}</h3>
            <div className="goal-box"></div>
        </div>
    )
}

export default SavingsCard