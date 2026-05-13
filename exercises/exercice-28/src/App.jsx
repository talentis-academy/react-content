import { useState, useRef, useEffect } from 'react';
import OpenAI from 'openai';
import ChatMessage from './components/ChatMessage';

export default function App() {
  const [apiKey, setApiKey] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim() || !apiKey || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      const res = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: newMessages,
      });
      setMessages(prev => [...prev, res.choices[0].message]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif',
    }}>
      <div style={{
        width: '100%', maxWidth: '640px', backgroundColor: '#1e293b',
        borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '80vh',
      }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #334155' }}>
          <h1 style={{ margin: 0, color: '#f1f5f9', fontSize: '1.1rem', fontWeight: '700' }}>Chat GPT</h1>
          <input
            type="password"
            placeholder="Paste your OpenAI API key..."
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            style={{
              marginTop: '8px', width: '100%', padding: '8px 12px', borderRadius: '8px',
              border: '1px solid #475569', backgroundColor: '#0f172a', color: '#94a3b8',
              fontSize: '0.8rem', boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {messages.length === 0 && (
            <p style={{ color: '#475569', textAlign: 'center', marginTop: '40px' }}>
              Enter your API key above and start chatting!
            </p>
          )}
          {messages.map((msg, i) => <ChatMessage key={i} {...msg} />)}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
              <div style={{ padding: '10px 14px', backgroundColor: '#f1f5f9', borderRadius: '18px 18px 18px 4px', color: '#64748b', fontSize: '0.85rem' }}>
                Thinking...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={sendMessage} style={{ padding: '16px 20px', borderTop: '1px solid #334155', display: 'flex', gap: '10px' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a message..."
            disabled={loading || !apiKey}
            style={{
              flex: 1, padding: '10px 14px', borderRadius: '10px',
              border: '1px solid #475569', backgroundColor: '#0f172a', color: '#f1f5f9',
              fontSize: '0.9rem',
            }}
          />
          <button type="submit" disabled={loading || !input.trim() || !apiKey} style={{
            padding: '10px 20px', backgroundColor: '#4f7eff', color: '#fff',
            border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer',
            opacity: (!input.trim() || !apiKey) ? 0.5 : 1,
          }}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
