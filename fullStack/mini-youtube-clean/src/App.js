import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WatchLater from './pages/WatchLater';

function App() {
  // Load from sessionStorage
  const [watchLater, setWatchLater] = React.useState(() => {
    const saved = sessionStorage.getItem('watchLater');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to sessionStorage when watchLater updates
  React.useEffect(() => {
    sessionStorage.setItem('watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home watchLater={watchLater} setWatchLater={setWatchLater} />} />
          <Route path="/watch-later" element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
