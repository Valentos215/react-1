import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  const clickOnItem = () => {
    if (props.title === "Profile") props.clickOnProfile();
  };
  return (
    <div className={s.item}>
      <NavLink
        onClick={clickOnItem}
        to={props.link}
        activeClassName={s.activeLink}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavItem;
