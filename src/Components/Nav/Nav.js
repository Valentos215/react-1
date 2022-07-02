import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <div className="nav-item">
          <a href="#f">Profile</a>
        </div>
        <div className="nav-item">
          <a href="#f">Messages</a>
        </div>
        <div className="nav-item">
          <a href="#f">News</a>
        </div>
        <div className="nav-item">
          <a href="#f">Music</a>
        </div>
        <div className="nav-item">
          <a href="#f">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
