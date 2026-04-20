import { useSearchParams } from 'react-router-dom';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard';

const genres = ['Tous', ...new Set(movies.map(m => m.genre))];

export default function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreFilter = searchParams.get('genre') || '';
  const filtered = genreFilter ? movies.filter(m => m.genre === genreFilter) : movies;

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <h1>🎬 Catalogue de Films</h1>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {genres.map(genre => (
          <button key={genre} onClick={() => genre === 'Tous' ? setSearchParams({}) : setSearchParams({ genre })}
            style={{ padding: '6px 16px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '0.875rem', background: genreFilter === genre || (!genreFilter && genre === 'Tous') ? '#6366f1' : '#f3f4f6', color: genreFilter === genre || (!genreFilter && genre === 'Tous') ? 'white' : '#374151' }}>
            {genre}
          </button>
        ))}
      </div>
      <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{filtered.length} film{filtered.length > 1 ? 's' : ''}{genreFilter && ` dans "${genreFilter}"`}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
        {filtered.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
