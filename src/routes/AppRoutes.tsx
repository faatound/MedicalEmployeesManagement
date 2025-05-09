import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RecruiterSignup from '../pages/RecruiterSignup';
import EmployeeSignup from '../pages/EmployeeSignup';
import Dashboard from '../pages/Dashboard';
import Hopitaux from '../pages/Hopitaux';
import PublierOffre from '../pages/PublierOffre';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruiter-signup" element={<RecruiterSignup />} />
        <Route path="/employee-signup" element={<EmployeeSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hopitaux" element={<Hopitaux />} />
        <Route path="/publier-offre" element={<PublierOffre />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
