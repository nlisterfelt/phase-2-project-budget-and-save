import React from "react";

function CategoryCards({budgetItems, category, onBudgetItemDelete}){
    const items = budgetItems.filter(item=>item.category===category)
        .sort((a, b)=>(a.date>=b.date) ? 1 : -1)

    function handleDelete(item){
        fetch(`http://localhost:3000/budget/${item.id}`,{
            method: 'DELETE'
        })
        onBudgetItemDelete(item)
    }
    const itemsJSX = items.length===0? null : items.map(item=><div key={item.id}><button onClick={e=>handleDelete(item)}>X</button>   {item.date}   {item.name}......${item.amount}</div>)
    return (
        <div className="category-cards">
            <h4>{category}</h4>
            {itemsJSX}
        </div>
    )
}

export default CategoryCards