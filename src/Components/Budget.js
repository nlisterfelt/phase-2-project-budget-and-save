import React from "react";
import CategoryCards from "./CategoryCards";

function Budget({budgetItems, categories, totalIncome, totalSpent}){
    
    const categoryCards = categories.map(category=><CategoryCards key={category} budgetItems={budgetItems} category={category}/>)
    return (
        <div>
            <h2>Budget</h2>
            <span style={{display: 'flex'}}>
                <h2>Income: {totalIncome} Spent: {totalSpent} Leftover:</h2>
                <h2 className={totalIncome-totalSpent>=0? 'moneyPos': 'moneyNeg'} >{totalIncome-totalSpent}</h2>
            </span>
            {categoryCards}
        </div>
    )
}

export default Budget