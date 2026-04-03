import { useLocation, Link } from 'react-router-dom';

function Detail() {
  // Mengambil data yang dikirimkan dari halaman Home melalui Link state
  const location = useLocation();
  const movie = location.state;

  // Jika user merefresh halaman (state hilang), minta kembali ke beranda
  if (!movie) {
    return (
      <div>
        <p>Data tidak ditemukan. Silakan akses melalui Beranda.</p>
        <Link to="/">&larr; Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: '#e23636', marginBottom: '20px', display: 'block' }}>
        &larr; Kembali ke Beranda
      </Link>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <img src={movie.poster_url} alt={movie.title} style={{ width: '250px', borderRadius: '8px' }} />
        
        <div>
          <h2>{movie.title}</h2>
          <p><strong>Tipe:</strong> {movie.type}</p>
          <p><strong>Tanggal Rilis:</strong> {movie.release_date}</p>
          <p style={{ color: '#e23636', fontWeight: 'bold' }}>Tayang dalam {movie.days_until} hari!</p>
          
          <div style={{ marginTop: '20px' }}>
            <h4>Sinopsis:</h4>
            <p style={{ lineHeight: '1.6' }}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;