import React from "react";

function CategoryCards({budgetItems, category, onBudgetItemDelete}){
    const items = budgetItems.filter(item=>item.category===category)
    function handleDelete(id){
        fetch(`http://localhost:3000/budget/${id}`,{
            method: 'DELETE'
        })
        onBudgetItemDelete(id)
    }
    const itemsJSX = items.length===0? null : items.map(item=><div key={item.id}><button onClick={e=>handleDelete(item.id)}>X</button>   {item.date}   {item.name}......${item.amount}</div>)
    return (
        <div className="category-cards">
            <h3>{category}</h3>
            {itemsJSX}
        </div>
    )
}

export default CategoryCards