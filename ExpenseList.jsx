const ExpenseList = ({ txns, onDelete }) => (
  <ul className="mt-6 space-y-2">
    {txns.map(txn => (
      <li key={txn.id} className="bg-white shadow p-4 rounded flex justify-between">
        <div>
          <div className="font-semibold">{txn.category} - £{txn.amount.toFixed(2)}</div>
          <div className="text-sm text-gray-500">{txn.date} • {txn.note}</div>
        </div>
        <button onClick={() => onDelete(txn.id)} className="text-red-500">Delete</button>
      </li>
    ))}
  </ul>
);
export default ExpenseList;
