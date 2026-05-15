import { describe, it, expect } from 'vitest';
import watchlistReducer, { toggleWatchlist } from '../../src/store/watchlistSlice';

// Sample movie objects matching the shape stored in the slice.
const movieA = {
  id: 1,
  title: 'Inception',
  director: 'Christopher Nolan',
  genre: 'Sci-Fi',
  year: 2010,
  rating: 5,
  emoji: '🌀',
};

const movieB = {
  id: 2,
  title: 'The Dark Knight',
  director: 'Christopher Nolan',
  genre: 'Action',
  year: 2008,
  rating: 5,
  emoji: '🦇',
};

describe('watchlistSlice', () => {
  it('returns the initial state with an empty items array', () => {
    const state = watchlistReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ items: [] });
  });

  it('adds a movie to the watchlist when it is not already present', () => {
    const state = watchlistReducer({ items: [] }, toggleWatchlist(movieA));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(movieA);
  });

  it('toggling a movie that is already in the watchlist removes it', () => {
    const state = watchlistReducer({ items: [movieA] }, toggleWatchlist(movieA));
    expect(state.items).toHaveLength(0);
    expect(state.items.some((m) => m.id === movieA.id)).toBe(false);
  });

  it('removes only the matching movie and keeps the others', () => {
    const state = watchlistReducer(
      { items: [movieA, movieB] },
      toggleWatchlist(movieA)
    );
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(movieB);
  });

  it('does not mutate the previous state', () => {
    const previousState = { items: [] };
    watchlistReducer(previousState, toggleWatchlist(movieA));
    expect(previousState.items).toHaveLength(0);
  });
});
