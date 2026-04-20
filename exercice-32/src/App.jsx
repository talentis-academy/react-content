import LocalStorageDemo from './components/LocalStorageDemo';
import DebounceDemo from './components/DebounceDemo';
import FetchDemo from './components/FetchDemo';

function Section({ title, hook, children }) {
  return (
    <div style={{ backgroundColor: '#1e293b', borderRadius: '14px', padding: '20px 24px' }}>
      <div style={{ marginBottom: '14px' }}>
        <h2 style={{ margin: '0 0 2px', color: '#f1f5f9', fontSize: '1rem', fontWeight: '700' }}>{title}</h2>
        <code style={{ color: '#4f7eff', fontSize: '0.8rem' }}>{hook}</code>
      </div>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0f172a', fontFamily: 'sans-serif',
      padding: '40px 20px', color: '#f1f5f9',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '4px' }}>Custom Hooks</h1>
        <p style={{ color: '#64748b', marginBottom: '32px' }}>Reusable logic extracted into hooks</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Section title="Persist state across reloads" hook="useLocalStorage(key, initialValue)">
            <LocalStorageDemo />
          </Section>
          <Section title="Debounce rapidly changing values" hook="useDebounce(value, delay)">
            <DebounceDemo />
          </Section>
          <Section title="Fetch data with loading/error states" hook="useFetch(url)">
            <FetchDemo />
          </Section>
        </div>
      </div>
    </div>
  );
}
