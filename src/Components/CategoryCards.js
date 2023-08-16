import React from "react";

function CategoryCards({budgetItems, category}){
    const items = budgetItems.filter(item=>item.category===category)
    const itemsJSX = items.length===0? null : items.map(item=><div key={item.id}>{item.date}   {item.name}......${item.amount}</div>)
    return (
        <div className="category-cards">
            <h3>{category}</h3>
            {itemsJSX}
        </div>
    )
}

export default CategoryCards