import UserCard from './components/UserCard';

const users = [
  { name: 'Alice', city: 'Paris', hobby: 'Développement web' },
  { name: 'Bob', city: 'Lyon', hobby: 'Design UI' },
  { name: 'Carol', city: 'Bordeaux', hobby: 'React & TypeScript' },
];

export default function App() {
  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0d1117',
      display: 'flex', gap: '16px', alignItems: 'center',
      justifyContent: 'center', flexWrap: 'wrap', padding: '2rem',
    }}>
      {users.map(u => <UserCard key={u.name} {...u} />)}
    </div>
  );
}
