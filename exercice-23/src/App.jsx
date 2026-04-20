import { useState } from 'react';
import { cars } from './data/cars';
import CarCard from './components/CarCard';

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div style={{
      minHeight: '100vh', background: '#0d1117',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        {cars.map(car => (
          <CarCard key={car.id} car={car} onViewDetails={setSelectedId} />
        ))}
      </div>
    </div>
  );
}
