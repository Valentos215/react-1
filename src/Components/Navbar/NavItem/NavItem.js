import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={props.link} activeClassName={s.activeLink}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavItem;
