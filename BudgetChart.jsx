import { Doughnut } from 'react-chartjs-2';
import { categories } from './categories.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = ({ transactions }) => {
  const data = {
    labels: categories,
    datasets: [{
      data: categories.map(cat =>
        transactions.filter(t => t.category === cat && t.amount < 0).reduce((a, b) => a + Math.abs(b.amount), 0)
      ),
      backgroundColor: ['#6366f1', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'],
    }]
  };

  return <div className="max-w-xs mx-auto"><Doughnut data={data} /></div>;
};
export default BudgetChart;
