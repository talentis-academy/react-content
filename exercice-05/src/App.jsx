import ProfileCard from './components/ProfileCard';

const profiles = [
  { name: 'Alice Martin', role: 'Développeuse Frontend', email: 'alice@example.com', online: true },
  { name: 'Bob Dupont', role: 'Designer UI/UX', email: 'bob@example.com', online: false },
  { name: 'Carol Leroy', role: 'Tech Lead', email: 'carol@example.com', online: true },
];

export default function App() {
  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0d1117',
      display: 'flex', gap: '16px', alignItems: 'center',
      justifyContent: 'center', flexWrap: 'wrap', padding: '2rem',
    }}>
      {profiles.map(p => <ProfileCard key={p.email} {...p} />)}
    </div>
  );
}
