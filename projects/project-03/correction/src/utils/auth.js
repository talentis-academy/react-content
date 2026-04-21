import { redirect } from "react-router-dom";
export function getToken() { return localStorage.getItem("token"); }
export function setToken(t) { localStorage.setItem("token", t); }
export function removeToken() { localStorage.removeItem("token"); }
export function authLoader() {
  if (!getToken()) throw redirect("/login");
  return null;
}
