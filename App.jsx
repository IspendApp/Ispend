import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import AddTransaction from './AddTransaction.jsx';
import MonthlyOverview from './MonthlyOverview.jsx';
import Settings from './Settings.jsx';
import Navbar from './Navbar.jsx';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTransaction />} />
      <Route path="/overview" element={<MonthlyOverview />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
);
export default App;
