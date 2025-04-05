import React, { useState } from 'react';
import './BudgetTracking.css';

const BudgetTracking = () => {
  const [budget, setBudget] = useState(10000); // Example budget amount
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ category: '', amount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleAddExpense = () => {
    if (expense.category && expense.amount) {
      setExpenses([...expenses, { ...expense, amount: Number(expense.amount), id: Date.now() }]);
      setExpense({ category: '', amount: '' });
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remainingBudget = budget - totalSpent;

  // ✅ Category-wise expense summary
  const categorySummary = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="budget-container">
      <h2>Budget Tracking</h2>
      <div className="budget-summary">
        <p><strong>Total Budget:</strong> ${budget}</p>
        <p><strong>Spent:</strong> ${totalSpent}</p>
        <p><strong>Remaining:</strong> ${remainingBudget}</p>
      </div>

      {/* ✅ Show budget warning if overspent */}
      {remainingBudget < 0 && (
        <p className="budget-warning">⚠️ Warning: Over Budget!</p>
      )}
      
      <div className="expense-form">
        <input type="text" name="category" value={expense.category} onChange={handleInputChange} placeholder="Expense Category" />
        <input type="number" name="amount" value={expense.amount} onChange={handleInputChange} placeholder="Amount" />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <ul className="expense-list">
        {expenses.map(exp => (
          <li key={exp.id} className="expense-item">
            <span>{exp.category}: ${exp.amount}</span>
            <button className="delete-btn" onClick={() => handleDeleteExpense(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* ✅ Category-wise summary */}
      {expenses.length > 0 && (
        <div className="category-summary">
          <h3>Expense Breakdown</h3>
          <ul>
            {Object.entries(categorySummary).map(([category, amount]) => (
              <li key={category}>{category}: ${amount}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BudgetTracking;

