export const loadTransactions = () => {
  const data = localStorage.getItem('ispent_txns');
  return data ? JSON.parse(data) : [];
};

export const saveTransactions = (txns) => {
  localStorage.setItem('ispent_txns', JSON.stringify(txns));
};
