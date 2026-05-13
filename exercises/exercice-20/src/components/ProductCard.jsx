import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const isInCart = useSelector(s => s.cart.items.some(i => i.id === product.id));
  return (
    <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', color: '#6b7280' }}>{product.category}</span>
      <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>{product.name}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>{product.price.toLocaleString('fr-FR')} €</span>
        <button onClick={() => dispatch(addToCart(product))} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', background: isInCart ? '#dcfce7' : '#6366f1', color: isInCart ? '#16a34a' : 'white', fontWeight: '600', cursor: 'pointer' }}>
          {isInCart ? '✓ Dans le panier' : 'Ajouter'}
        </button>
      </div>
    </div>
  );
}
