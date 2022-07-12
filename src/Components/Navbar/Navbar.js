import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
  const navArray = [
    { id: 1, title: "Profile", link: "/profile" },
    { id: 2, title: "Dialogs", link: "/dialogs" },
    { id: 3, title: "News", link: "/news" },
    { id: 4, title: "Music", link: "/music" },
    { id: 5, title: "Settings", link: "/settings" },
  ];
  const navMenu = navArray.map((item) => (
    <NavItem title={item.title} link={item.link} key={item.id} />
  ));

  return (
    <nav className={s.nav}>
      <div className={s.menu}>{navMenu}</div>
      <Friends store={props.store} />
    </nav>
  );
};

export default Navbar;
