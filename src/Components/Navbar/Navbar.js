import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
  const navArray = [
    { title: "Profile", link: "/profile" },
    { title: "Dialogs", link: "/dialogs" },
    { title: "News", link: "/news" },
    { title: "Music", link: "/music" },
    { title: "Settings", link: "/settings" },
  ];
  const navMenu = navArray.map((item) => (
    <NavItem title={item.title} link={item.link} />
  ));

  return (
    <nav className={s.nav}>
      <div className={s.menu}>{navMenu}</div>
      <Friends store={props.store} />
    </nav>
  );
};

export default Navbar;
