import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import AnalyticsDashboard from './pages/AnalyticsDashboard.jsx';
// import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accueil" element={<Homepage/>} />
        <Route path="/analytics" element={<AnalyticsDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;