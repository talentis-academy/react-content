import { movies } from "../data/movies";
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
export async function fetchMovies() { await delay(600); return movies; }
export async function fetchMovieById(id) { await delay(400); return movies.find((m) => m.id === Number(id)) ?? null; }
export async function fakeLogin({ email, password }) {
  await delay(800);
  if (password.length < 4) throw new Error("Invalid credentials");
  return { token: "fake-jwt-token", user: { email } };
}
