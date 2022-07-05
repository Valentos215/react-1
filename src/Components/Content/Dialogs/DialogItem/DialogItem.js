import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink
        to={"/dialogs/user" + props.id}
        className={({ isActive }) => (isActive ? s.activeLink : undefined)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
