import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Kids</h1>

      <ul className="header__nav">
        <li>Home</li>
        <li>Dashboard</li>
        <li>About</li>
      </ul>
    </header>
  );
}

export default Header;
