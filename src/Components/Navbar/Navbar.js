import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.menu}>
        <div className={s.item}>
          <a href="#f">Profile</a>
        </div>
        <div className={s.item}>
          <a href="#f">Messages</a>
        </div>
        <div className={s.item}>
          <a href="#f">News</a>
        </div>
        <div className={s.item}>
          <a href="#f">Music</a>
        </div>
        <div className={s.item}>
          <a href="#f">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
