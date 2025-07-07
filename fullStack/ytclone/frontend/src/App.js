import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import VideoPlayer from './pages/VideoPlayer';
import Dashboard from './pages/Dashboard';
import WatchLater from './pages/WatchLater';
import SearchResults from './pages/SearchResults';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <div className="flex-grow-1 p-3" style={{ background: '#f8f9fa' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
console.log("App component mounted");
