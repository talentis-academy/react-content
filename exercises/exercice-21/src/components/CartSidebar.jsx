import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import CartItem from './CartItem';
export default function CartSidebar() {
  const dispatch = useDispatch();
  const items = useSelector(s => s.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  return (
    <aside style={{ width: '300px', flexShrink: 0, background: 'white', borderLeft: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6' }}>
        <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '800' }}>Panier {count > 0 && <span style={{ color: '#6366f1' }}>({count})</span>}</h2>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 1.5rem' }}>
        {items.length === 0 ? <p style={{ color: '#9ca3af', textAlign: 'center', padding: '2rem 0' }}>Votre panier est vide.</p>
          : items.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      {items.length > 0 && (
        <div style={{ padding: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontWeight: '600' }}>Total</span>
            <span style={{ fontWeight: '800', fontSize: '1.25rem' }}>{total.toLocaleString('fr-FR')} €</span>
          </div>
          <button onClick={() => dispatch(clearCart())} style={{ width: '100%', padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', marginBottom: '8px' }}>Vider le panier</button>
          <button style={{ width: '100%', padding: '10px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Commander</button>
        </div>
      )}
    </aside>
  );
}
