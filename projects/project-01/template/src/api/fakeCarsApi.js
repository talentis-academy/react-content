import { cars } from "../data/cars";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export async function fetchCars() {
  await delay(600);
  return cars;
}

export async function fetchCarById(id) {
  await delay(400);
  return cars.find((c) => c.id === Number(id)) ?? null;
}

export async function fakeLogin({ email, password }) {
  await delay(800);
  if (password.length < 4) throw new Error("Invalid credentials");
  return { token: "fake-jwt-token", user: { email, name: email.split("@")[0] } };
}
