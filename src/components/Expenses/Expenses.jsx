import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ items }) {
    const [selectedYear, setSelectedYear] = useState("2019");

    // filter items based on current year
    const selectedYearItems = items.filter(
        (item) => item.date.getFullYear() == selectedYear
    );

    const selectYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    return (
        <>
            <Card className="expenses">
                <div></div>
                <ExpensesFilter
                    selectedYear={selectedYear}
                    onYearSelected={selectYearHandler}
                />
                <ExpensesList items={selectedYearItems} />
            </Card>
        </>
    );
}

export default Expenses;
