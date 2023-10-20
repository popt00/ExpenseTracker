import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFiler from "./ExpenseFiler";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onSaveDateHandling = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear + "," + filteredYear);
  };
  return (
    <div>
      <ExpenseFiler onSaveDate={onSaveDateHandling} />
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
