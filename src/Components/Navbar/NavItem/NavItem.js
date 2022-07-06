import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? s.activeLink : undefined)}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavItem;
