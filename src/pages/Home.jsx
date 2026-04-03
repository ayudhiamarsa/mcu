import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data dari MCU Countdown API
    fetch('https://www.whenisthenextmcufilm.com/api')
      .then(res => res.json())
      .then(data => {
        // Kita gabungkan Film Terdekat dan Film Setelahnya menjadi sebuah Array
        const upcomingMovies = [];
        if (data) upcomingMovies.push(data); // Film 1
        if (data.following_production) upcomingMovies.push(data.following_production); // Film 2
        
        setMovies(upcomingMovies);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Memuat data MCU...</p>;

  return (
    <div>
      <h3>Daftar Rilis Film MCU Selanjutnya</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            <img src={movie.poster_url} alt={movie.title} style={{ width: '150px', borderRadius: '8px' }} />
            <h4>{movie.title}</h4>
            <p style={{ color: 'gray', fontSize: '14px' }}>Rilis: {movie.release_date}</p>
            
            {/* Navigasi ke halaman detail sekaligus membawa state data (karena API ini tidak punya endpoint search by ID) */}
            <Link to={`/movie/${movie.id}`} state={movie}>
              <button style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: '#e23636', color: 'white', border: 'none', borderRadius: '5px' }}>
                Lihat Rincian
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;