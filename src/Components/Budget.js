import React from "react";
import CategoryCards from "./CategoryCards";

function Budget({budgetItems, categories, totalIncome, totalSpent, onBudgetItemDelete}){
    const numberFormatter = new Intl.NumberFormat("en-IN")
    const totalIncomeFormatted = numberFormatter.format(totalIncome)
    const totalSpentFormatted = numberFormatter.format(totalSpent)
    const moneyDifference = numberFormatter.format(totalIncome-totalSpent)

    const categoryCards = categories.map(category=><CategoryCards key={category} budgetItems={budgetItems} category={category} onBudgetItemDelete={onBudgetItemDelete}/>)
    return (
        <div>
            <h2>Budget</h2>
            <span style={{display: 'flex'}}>
                <h2>Income: ${totalIncomeFormatted} Spent: ${totalSpentFormatted} Leftover: </h2>
                <h2 className={totalIncome-totalSpent>=0? 'moneyPos': 'moneyNeg'} >${moneyDifference}</h2>
            </span>
            {categoryCards}
        </div>
    )
}

export default Budget