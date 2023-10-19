import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const eventData= {
            title : enteredTitle,
            amount : enteredAmount,
            date : enteredDate
        }
        props.onSaveExpenseData(eventData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__control">
          <div className="new-expense__control">
              <label>Title</label>
              <input type= 'text' value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
              <label>amount</label>
              <input type= 'number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
              <label>Date</label>
              <input type= 'date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
          </div>
        </div>
        <div className='new-expense__actions'>
            <button type = "submit"> Add Expense</button>
        </div>
      </form>
      );
}

export default ExpenseForm;