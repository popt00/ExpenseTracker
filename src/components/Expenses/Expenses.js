import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const onSaveDateHandling = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (item) => {return item.date.getFullYear().toString() === filteredYear;}
  );
  // console.log(props.items);
  // console.log(props.items.filter(
  //   (item) => {return item.date.getFullYear().to === "2021";}
  // ));
  // console.log(props.items.filter(
  //   (item) => {return item.date.getFullYear() === "2022";}
  // ));

  return (
    <div>
      <ExpenseFilter onSaveDate={onSaveDateHandling} />
      <Card className="expenses">
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
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
