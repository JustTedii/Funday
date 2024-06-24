import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/structure/Navbar';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Locate from './components/pages/Locate';
import Authentic from './components/UserLogged/Authentic';
import ProtectedRoutes from './components/utils/ProtectedRoutes';
import Dashboard from './components/pages/Dashboard';
import { AuthProvider } from './components/utils/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/News" element={<News />} />
              <Route path="/Locate" element={<Locate />} />
              <Route path="/Authentic" element={<Authentic />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/Dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
