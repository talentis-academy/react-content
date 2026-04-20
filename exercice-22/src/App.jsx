import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', background: '#f9fafb' }}>
        <aside style={{ width: '300px', background: 'white', borderRight: '1px solid #e5e7eb', padding: '1.5rem' }}>
          <h2 style={{ marginBottom: '1rem', fontWeight: '800' }}>👥 Utilisateurs</h2>
          <UserList selectedId={selectedId} onSelect={setSelectedId} />
        </aside>
        <main style={{ flex: 1, padding: '2rem' }}>
          {selectedId ? <UserDetail userId={selectedId} /> : <div style={{ color: '#9ca3af', textAlign: 'center', paddingTop: '4rem' }}>← Sélectionnez un utilisateur</div>}
        </main>
      </div>
    </Provider>
  );
}
