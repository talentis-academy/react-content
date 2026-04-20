import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">🍳 Recipe Book</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Recipes</Link>
          <Link to="/saved" className="nav-link">Saved</Link>
        </nav>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
