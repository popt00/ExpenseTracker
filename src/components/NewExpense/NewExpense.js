import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  const [isFormVisible, setisFormVisible] = useState("no");
  const addNewExpenseButtonHandler = () => {
    setisFormVisible("yes");
  };

  const cancelButtonHandler = () =>{
    setisFormVisible('no');
  }
  return (
    <div className="new-expense">
      {isFormVisible == "no" && (
        <button
          type="button"
          className="new-expense__actions"
          onClick={addNewExpenseButtonHandler}
        >
          Add New Expense
        </button>
      )}
      {isFormVisible == "yes" && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelButtonHandler = {cancelButtonHandler} />
      )}
    </div>
  );
};

export default NewExpense;
