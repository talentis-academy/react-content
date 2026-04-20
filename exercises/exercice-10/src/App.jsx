import Users from './pages/Users';
import Comments from './pages/Comments';
export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '32px 16px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '32px' }}>Custom Hook — useFetchApi</h1>
      <Users />
      <Comments />
    </div>
  );
}
