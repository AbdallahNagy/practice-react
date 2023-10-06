/* eslint-disable react/prop-types */
import './ExpenseDateItem.css'

function ExpenseDateItem(props) {
    
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: 'numeric'})

    return (
        <div className='expense-date'>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date'>{day}</div>
        </div>
    )
}

export default ExpenseDateItem;