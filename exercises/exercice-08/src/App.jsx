import { useState } from 'react';
import Child from './Child';

const ORDERS = [
  "Avancez vers le nord !",
  "Repliez-vous immédiatement !",
  "Tenez la position !",
  "Établissez le camp de base !",
  "Reconnaissance du périmètre !",
];

export default function App() {
  const [orderMessage, setOrderMessage] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [history, setHistory] = useState([]);

  function sendOrder() {
    setOrderMessage(ORDERS[Math.floor(Math.random() * ORDERS.length)]);
    setOrderStatus(null);
  }

  function handleResponse(response) {
    setOrderStatus(response);
    setHistory(prev => [...prev, { order: orderMessage, response, id: Date.now() }]);
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '500px', margin: '0 auto' }}>
      <h1>📡 QG — Commandement</h1>
      <button onClick={sendOrder} style={{ padding: '0.6rem 1.2rem', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '1rem' }}>
        Envoyer un ordre
      </button>
      {orderStatus === 'accepted' && <p style={{ color: '#27ae60', fontWeight: 'bold', marginTop: '1rem' }}>✅ Ordre accepté par le soldat.</p>}
      {orderStatus === 'refused' && <p style={{ color: '#e74c3c', fontWeight: 'bold', marginTop: '1rem' }}>❌ Ordre refusé par le soldat.</p>}
      {orderMessage && <Child order={orderMessage} onRespond={handleResponse} />}
      {history.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📋 Historique</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {history.map(entry => (
              <li key={entry.id} style={{ padding: '0.4rem 0', borderBottom: '1px solid #eee', color: entry.response === 'accepted' ? '#27ae60' : '#e74c3c' }}>
                {entry.response === 'accepted' ? '✅' : '❌'} {entry.order}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
