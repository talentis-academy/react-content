import { useState } from 'react';
import { cars } from './data/cars';
import CarCard from './components/CarCard';
import CarDetail from './components/CarDetail';

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedCar = cars.find(c => c.id === selectedId);

  return (
    <div style={{
      minHeight: '100vh', backgroundColor: '#0d1117',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem',
    }}>
      {selectedCar ? (
        <CarDetail car={selectedCar} onBack={() => setSelectedId(null)} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {cars.map(car => (
            <CarCard key={car.id} car={car} onViewDetails={setSelectedId} />
          ))}
        </div>
      )}
    </div>
  );
}
