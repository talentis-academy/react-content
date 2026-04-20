import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError('');
    onLogin?.({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '320px' }}>
      <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: '700' }}>Login</h2>

      {error && (
        <p role="alert" style={{ color: '#ef4444', fontSize: '0.875rem', margin: 0 }}>{error}</p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.9rem' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          style={{ padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '0.9rem' }}
        />
      </div>

      <button type="submit" style={{
        padding: '12px', backgroundColor: '#4f7eff', color: '#fff', border: 'none',
        borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem',
      }}>
        Sign In
      </button>
    </form>
  );
}
