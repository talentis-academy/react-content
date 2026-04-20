export default function ChatMessage({ role, content }) {
  const isUser = role === 'user';
  return (
    <div style={{
      display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '12px',
    }}>
      <div style={{
        maxWidth: '75%', padding: '10px 14px', borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        backgroundColor: isUser ? '#4f7eff' : '#f1f5f9',
        color: isUser ? '#ffffff' : '#1e293b',
        fontSize: '0.9rem', lineHeight: '1.5',
      }}>
        {content}
      </div>
    </div>
  );
}
