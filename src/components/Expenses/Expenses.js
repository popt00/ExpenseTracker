import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSaveDateHandling = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpense);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onSaveDate={onSaveDateHandling} />
        <ExpenseList items = {filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
