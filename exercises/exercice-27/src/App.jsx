import LoginForm from './components/LoginForm';

export default function App() {
  function handleLogin(creds) {
    alert(`Logged in as ${creds.email}`);
  }
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#f8fafc', fontFamily: 'sans-serif',
    }}>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
