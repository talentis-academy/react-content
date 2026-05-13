import { useNavigate } from 'react-router-dom';
export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movies/${movie.id}`)} style={{ background: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.15s', border: '1px solid #f3f4f6' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
      <span style={{ background: '#e0e7ff', color: '#6366f1', padding: '3px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700' }}>{movie.genre}</span>
      <h3 style={{ margin: '8px 0 4px', fontSize: '1rem' }}>{movie.title}</h3>
      <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem' }}>{movie.year} • ⭐ {movie.rating}</p>
    </div>
  );
}
