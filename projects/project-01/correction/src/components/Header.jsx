import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeToken } from "../utils/auth";

export default function Header() {
  const navigate = useNavigate();
  const favCount = useSelector((s) => s.favorites.items.length);

  function handleLogout() {
    removeToken();
    navigate("/login");
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Car Catalog</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">
            Favorites {favCount > 0 && <span style={{ background: "var(--accent)", color: "#fff", borderRadius: "50%", padding: "1px 7px", fontSize: "0.75rem", marginLeft: "4px" }}>{favCount}</span>}
          </Link>
        </nav>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
