import { Provider } from 'react-redux';
import { store } from './store';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
export default function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', background: '#f9fafb' }}>
        <main style={{ flex: 1, padding: '2rem' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>🛍️ Catalogue</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </main>
        <CartSidebar />
      </div>
    </Provider>
  );
}
