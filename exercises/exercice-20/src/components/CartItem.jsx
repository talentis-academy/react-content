import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';
const qb = { width: '26px', height: '26px', borderRadius: '6px', border: '1px solid #e5e7eb', background: '#f9fafb', cursor: 'pointer', fontWeight: '700' };
export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f3f4f6' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontWeight: '600', fontSize: '0.875rem' }}>{item.name}</p>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.8rem' }}>{item.price.toLocaleString('fr-FR')} €</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} style={qb}>−</button>
        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '700' }}>{item.quantity}</span>
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} style={qb}>+</button>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}>✕</button>
    </div>
  );
}
