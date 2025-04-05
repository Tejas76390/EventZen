import React, { useEffect, useState } from 'react';
import { fetchExpenses, addExpense } from '../api/budgetService';

const BudgetTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  useEffect(() => {
    const getExpenses = async () => {
      const data = await fetchExpenses();
      setExpenses(data);
    };
    getExpenses();
  }, []);

  const handleAddExpense = async () => {
    if (newExpense.name && newExpense.amount) {
      const added = await addExpense(newExpense);
      setExpenses([...expenses, added]);
      setNewExpense({ name: '', amount: '' });
    }
  };

  return (
    <div className="budget-container">
      <h2>Budget Tracking</h2>
      <input
        type="text"
        placeholder="Expense Name"
        value={newExpense.name}
        onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={newExpense.amount}
        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
      />
      <button onClick={handleAddExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: ₹{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracking;

