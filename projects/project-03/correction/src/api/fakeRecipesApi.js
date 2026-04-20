import { recipes } from "../data/recipes";
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
export async function fetchRecipes() { await delay(600); return recipes; }
export async function fetchRecipeById(id) { await delay(400); return recipes.find((r) => r.id === Number(id)) ?? null; }
export async function fakeLogin({ email, password }) {
  await delay(800);
  if (password.length < 4) throw new Error("Invalid credentials");
  return { token: "fake-jwt-token", user: { email } };
}
