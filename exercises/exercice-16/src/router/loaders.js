import { redirect } from 'react-router-dom';
export function requireAuth() {
  return localStorage.getItem('token') ? null : redirect('/login');
}
export function requireGuest() {
  return localStorage.getItem('token') ? redirect('/') : null;
}
