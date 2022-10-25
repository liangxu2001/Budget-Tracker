import React from 'react'; 
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        { id: 123123, name: "Tools", cost:50},
        { id: 123123, name: "Supplies", cost:300},
        { id: 123123, name: "Broken Phones", cost:70},
        { id: 123123, name: "Parts", cost:40},
        { id: 123123, name: "Other", cost:500},
    ];

    return (
        <url className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem 
                    id ={expense.id}
                    name={expense.name} 
                    cost={expense.cost}/>
            ))}
        </url>
    );
};

export default ExpenseList;