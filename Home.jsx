import { useState, useEffect } from 'react';
import { loadTransactions, saveTransactions } from './localStorage.js';
import TransactionForm from './TransactionForm.jsx';
import ExpenseList from './ExpenseList.jsx';
import BudgetChart from './BudgetChart.jsx';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(loadTransactions());
  }, []);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const addTransaction = (txn) => setTransactions([txn, ...transactions]);
  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const balance = income - expenses;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 p-4 rounded">Income: £{income.toFixed(2)}</div>
        <div className="bg-red-100 p-4 rounded">Expenses: £{expenses.toFixed(2)}</div>
        <div className="bg-blue-100 p-4 rounded">Balance: £{balance.toFixed(2)}</div>
      </div>
      <BudgetChart transactions={transactions} />
      <TransactionForm onSubmit={addTransaction} />
      <ExpenseList txns={transactions} onDelete={deleteTransaction} />
    </div>
  );
};
export default Home;
