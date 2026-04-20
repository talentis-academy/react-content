import { useTheme, ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Card from './components/Card';

const cards = [
  { title: 'Getting Started', text: 'Learn the basics of React Context API for global state management.' },
  { title: 'Dark Mode', text: 'Toggle between light and dark themes using a shared context.' },
  { title: 'useContext', text: 'Any component in the tree can access and update the theme.' },
];

function Content() {
  const { theme } = useTheme();
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme === 'dark' ? '#0f172a' : '#f8fafc',
      transition: 'background-color 0.2s',
    }}>
      <Navbar />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ color: theme === 'dark' ? '#f1f5f9' : '#1e293b', marginBottom: '24px' }}>
          Context API — Theme Toggle
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cards.map(c => <Card key={c.title} {...c} />)}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
