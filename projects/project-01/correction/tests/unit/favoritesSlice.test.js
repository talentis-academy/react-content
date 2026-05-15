import { describe, it, expect } from 'vitest';
import favoritesReducer, { toggleFavorite } from '../../src/store/favoritesSlice';

// Sample car objects matching the API shape stored in the slice.
const carA = {
  id: 1,
  car: 'Toyota',
  car_model: 'Corolla',
  car_color: 'Yellow',
  car_model_year: 2012,
  car_vin: '1HGBH41JXMN109186',
  price: '$30,253.26',
  availability: true,
};

const carB = {
  id: 2,
  car: 'Honda',
  car_model: 'Civic',
  car_color: 'Blue',
  car_model_year: 2012,
  car_vin: '2HGBH41JXMN109187',
  price: '$25,000.00',
  availability: false,
};

describe('favoritesSlice', () => {
  it('returns the initial state with an empty favorites array', () => {
    const state = favoritesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ favorites: [] });
  });

  it('adds a car to favorites when it is not already present', () => {
    const state = favoritesReducer({ favorites: [] }, toggleFavorite(carA));
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(carA);
  });

  it('toggling a car that is already a favorite removes it', () => {
    const state = favoritesReducer({ favorites: [carA] }, toggleFavorite(carA));
    expect(state.favorites).toHaveLength(0);
    expect(state.favorites.some((car) => car.id === carA.id)).toBe(false);
  });

  it('removes only the matching car and keeps the others', () => {
    const state = favoritesReducer(
      { favorites: [carA, carB] },
      toggleFavorite(carA)
    );
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(carB);
  });

  it('does not mutate the previous state', () => {
    const previousState = { favorites: [] };
    favoritesReducer(previousState, toggleFavorite(carA));
    expect(previousState.favorites).toHaveLength(0);
  });
});
