import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ items }) {
    // show message in case no items in array.
    if (items.length == 0) 
        return <h2 className="expenses-list__fallback">no expenses found.</h2>;

    return (
        <ul className="expenses-list">
            {items.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </ul>
    );
}

export default ExpensesList;
