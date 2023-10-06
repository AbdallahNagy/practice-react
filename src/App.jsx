import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const staticItems = [
  { id: "e1", title: "cheese", amount: 42.8, date: new Date(2020, 2) },
  { id: "e2", title: "milk", amount: 34, date: new Date(2020, 8) },
  { id: "e3", title: "coca", amount: 89.1, date: new Date(2022, 1) },
  { id: "e4", title: "oats", amount: 90.8, date: new Date(2021, 9) },
];

function App() {
  const [items, setItems] = useState(staticItems);

  const recieveExpenseDataHandler = (expenseData) => {
    setItems((prevItems) => [expenseData, ...prevItems]);
  };

  return (
    <>
      <NewExpense onRecieveExpenseData={recieveExpenseDataHandler} />
      <Expenses items={items} />
    </>
  );
}

export default App;
