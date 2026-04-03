import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #e23636' }}>
        <h2 style={{ color: '#e23636' }}>🎬 MCU Countdown Web</h2>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Beranda</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;