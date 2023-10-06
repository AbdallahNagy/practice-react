import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense({onRecieveExpenseData}) {

    const expenseDataHandler = (recievedExpenseData) => {
        const expenseData = {
            ...recievedExpenseData,
            id: Math.random().toString()
        }

        onRecieveExpenseData(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={expenseDataHandler} />
        </div>
    )
}

export default NewExpense;