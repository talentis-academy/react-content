import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';
const stars = r => '★'.repeat(Math.round(r / 2)) + '☆'.repeat(5 - Math.round(r / 2));
export default function MovieDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  if (!movie) return <div style={{ textAlign: 'center', padding: '4rem', fontFamily: 'sans-serif' }}><h2>Film introuvable</h2><button onClick={() => navigate('/')}>← Retour</button></div>;
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: '1px solid #d1d5db', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', marginBottom: '1.5rem' }}>← Retour</button>
      <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '2rem' }}>
        <span style={{ background: '#e0e7ff', color: '#6366f1', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700' }}>{movie.genre}</span>
        <h1 style={{ marginTop: '0.75rem', marginBottom: '0.25rem' }}>{movie.title}</h1>
        <p style={{ color: '#6b7280' }}>{movie.year} • {movie.director} • <span style={{ color: '#f59e0b' }}>{stars(movie.rating)}</span> {movie.rating}/10</p>
        <hr style={{ borderColor: '#e5e7eb', margin: '1.5rem 0' }} />
        <p style={{ color: '#4b5563', lineHeight: 1.7 }}>{movie.synopsis}</p>
      </div>
    </div>
  );
}
