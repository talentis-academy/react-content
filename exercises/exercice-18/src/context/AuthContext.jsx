import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => { const s = localStorage.getItem('user'); if (s) setUser(JSON.parse(s)); setIsLoading(false); }, 600);
    return () => clearTimeout(t);
  }, []);
  function login({ username, password }) {
    if (username === 'admin' && password === 'password') {
      const u = { id: 1, name: 'Admin User', role: 'admin' };
      setUser(u); localStorage.setItem('user', JSON.stringify(u));
      return { success: true };
    }
    return { success: false, error: 'Identifiants incorrects' };
  }
  function logout() { setUser(null); localStorage.removeItem('user'); }
  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
