import "../App.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <span className="logo">Landing</span>
        </div>
        <a href="#" className="btn-primary sm">
          By Now
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
