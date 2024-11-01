import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">TypeScript Master Tutorial</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/lesson/1">Start</Link>
        </nav>
      </div>
    </header>
  );
}
