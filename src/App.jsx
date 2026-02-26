import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Services from './pages/Services';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="bg-luxury text-gray-200 min-h-screen font-sans selection:bg-rosegold selection:text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;