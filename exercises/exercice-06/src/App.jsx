import TeamList from './components/TeamList';

const members = [
  { id: 1, fullName: "Alice Martin", role: "Lead Developer", email: "alice@company.com", remote: true },
  { id: 2, fullName: "Bob Dupont", role: "UX Designer", email: "bob@company.com", remote: false },
  { id: 3, fullName: "Claire Bernard", role: "Product Manager", remote: true },
  { id: 4, fullName: "David Leclerc", role: "DevOps Engineer", email: "david@company.com", remote: false },
];

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Annuaire de l'équipe</h1>
      <TeamList title="Notre équipe" members={members} />
    </div>
  );
}
