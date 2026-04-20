import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setStep, incrementAsync } from '../store/counterSlice';
const btn = (c) => ({ padding: '12px 20px', background: c, color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' });
export default function Counter() {
  const { value, step, history, loading } = useSelector(s => s.counter);
  const dispatch = useDispatch();
  const recent = [...history].slice(-5).reverse();
  return (
    <div style={{ maxWidth: '400px', margin: '3rem auto', fontFamily: 'sans-serif', textAlign: 'center', padding: '0 1rem' }}>
      <h1>Compteur Redux</h1>
      <div style={{ fontSize: '5rem', fontWeight: '900', color: value >= 0 ? '#6366f1' : '#ef4444', lineHeight: 1, margin: '1rem 0' }}>{value}</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <button onClick={() => dispatch(decrement())} disabled={loading} style={btn('#ef4444')}>− {step}</button>
        <button onClick={() => dispatch(reset())} disabled={loading} style={btn('#6b7280')}>Reset</button>
        <button onClick={() => dispatch(increment())} disabled={loading} style={btn('#22c55e')}>+ {step}</button>
      </div>
      <button onClick={() => dispatch(incrementAsync(step))} disabled={loading} style={{ ...btn('#f59e0b'), marginBottom: '1.5rem', opacity: loading ? 0.6 : 1 }}>
        {loading ? '⏳ en cours...' : `⚡ +${step} async`}
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '1.5rem' }}>
        {[1, 5, 10].map(s => <button key={s} onClick={() => dispatch(setStep(s))} style={{ padding: '6px 16px', borderRadius: '20px', border: 'none', background: step === s ? '#6366f1' : '#e5e7eb', color: step === s ? 'white' : '#374151', fontWeight: '700', cursor: 'pointer' }}>{s}</button>)}
      </div>
      {recent.length > 0 && <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {recent.map((v, i) => <span key={i} style={{ background: i === 0 ? '#6366f1' : '#e5e7eb', color: i === 0 ? 'white' : '#374151', padding: '4px 10px', borderRadius: '6px', fontWeight: '700' }}>{v}</span>)}
      </div>}
    </div>
  );
}
