// Unit tests for the saved-recipes Redux slice.
// Run with: npm test
import { describe, it, expect } from "vitest";
import savedReducer, { toggleSaved } from "./savedSlice";

const recipeA = { id: 1, name: "Spaghetti Carbonara", cuisine: "Italian" };
const recipeB = { id: 2, name: "Beef Tacos", cuisine: "Mexican" };

describe("savedSlice", () => {
  it("starts with an empty items list", () => {
    const state = savedReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({ items: [] });
  });

  it("adds a recipe when toggleSaved is dispatched on a new recipe", () => {
    const state = savedReducer({ items: [] }, toggleSaved(recipeA));
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(recipeA);
  });

  it("removes a recipe when toggleSaved is dispatched on an already-saved recipe", () => {
    const state = savedReducer({ items: [recipeA] }, toggleSaved(recipeA));
    expect(state.items).toHaveLength(0);
  });

  it("toggles independently for different recipes", () => {
    let state = savedReducer({ items: [] }, toggleSaved(recipeA));
    state = savedReducer(state, toggleSaved(recipeB));
    expect(state.items.map((r) => r.id)).toEqual([1, 2]);

    state = savedReducer(state, toggleSaved(recipeA));
    expect(state.items.map((r) => r.id)).toEqual([2]);
  });

  it("does not mutate the previous state object", () => {
    const previous = { items: [] };
    const next = savedReducer(previous, toggleSaved(recipeA));
    expect(next).not.toBe(previous);
    expect(previous.items).toHaveLength(0);
  });
});
