import { useState } from 'react';

function getStrength(password) {
  const len = password.length;
  if (len === 0) return { message: 'Enter a password', color: '#999', score: 0 };
  const criteria = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const score = criteria.filter(Boolean).length;
  const levels = [
    { min: 0, message: 'Very Weak', color: '#c0392b' },
    { min: 1, message: 'Weak', color: '#e74c3c' },
    { min: 2, message: 'Medium', color: '#e67e22' },
    { min: 3, message: 'Strong', color: '#27ae60' },
    { min: 4, message: 'Very Strong', color: '#1e8449' },
  ];
  const level = [...levels].reverse().find(l => score >= l.min);
  return { ...level, score };
}

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const strength = getStrength(password);
  const progress = (strength.score / 4) * 100;

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>🔒 Password Strength Checker</h1>
      <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Enter password:
      </label>
      <div style={{ position: 'relative' }}>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            display: 'block', width: '100%', padding: '0.5rem 2.5rem 0.5rem 0.5rem',
            fontSize: '1rem', border: `2px solid ${strength.color}`, borderRadius: '4px',
            outline: 'none', boxSizing: 'border-box',
          }}
        />
        <button type="button" onClick={() => setShowPassword(p => !p)}
          style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1rem' }}>
          {showPassword ? '🙈' : '👁️'}
        </button>
      </div>
      <p style={{ marginTop: '0.75rem', fontWeight: 'bold', color: strength.color }}>
        Strength: {strength.message}
      </p>
      <div style={{ background: '#eee', borderRadius: '4px', height: '8px', overflow: 'hidden', marginBottom: '0.5rem' }}>
        <div style={{ width: `${progress}%`, background: strength.color, height: '100%', borderRadius: '4px', transition: 'width 0.3s ease, background 0.3s ease' }} />
      </div>
      <p style={{ color: '#888', fontSize: '0.85rem' }}>{password.length} caractère{password.length !== 1 ? 's' : ''}</p>
    </div>
  );
}
