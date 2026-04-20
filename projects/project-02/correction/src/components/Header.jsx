import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeToken } from "../utils/auth";
export default function Header() {
  const navigate = useNavigate();
  const count = useSelector((s) => s.watchlist.items.length);
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">🎬 Movie Hub</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Movies</Link>
          <Link to="/watchlist" className="nav-link">
            Watchlist {count > 0 && <span style={{ background: "var(--accent)", color: "#fff", borderRadius: "50%", padding: "1px 7px", fontSize: "0.75rem", marginLeft: "4px" }}>{count}</span>}
          </Link>
        </nav>
        <button onClick={() => { removeToken(); navigate("/login"); }} className="logout-btn">Logout</button>
      </div>
    </header>
  );
}
