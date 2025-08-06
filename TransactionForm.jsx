import { useState } from 'react';
import { categories } from './categories.js';

const TransactionForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Date.now(),
      amount: parseFloat(amount),
      note,
      category,
      date: new Date().toLocaleDateString()
    });
    setAmount('');
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input type="number" placeholder="Amount" className="border p-2 w-full" value={amount} onChange={e => setAmount(e.target.value)} required />
      <input placeholder="Note" className="border p-2 w-full" value={note} onChange={e => setNote(e.target.value)} />
      <select className="border p-2 w-full" value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Add Transaction</button>
    </form>
  );
};
export default TransactionForm;
