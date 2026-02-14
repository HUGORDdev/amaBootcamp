import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import AnalyticsDashboard from './pages/AnalyticsDashboard.jsx';
import Form from './pages/Form.jsx';
import Chatbot from './pages/ChatBot.jsx';
// import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/accueil" element={<Homepage/>} />
        <Route path="/analytics" element={<AnalyticsDashboard/>} />
        <Route path="/Évaluation" element={<Form/>} />
      </Routes>
    </Router>
  );
}

export default App;