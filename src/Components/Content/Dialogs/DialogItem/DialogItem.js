import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import UserImage from "../../../User/UserImage/UserImage";

const DialogItem = (props) => {
  return (
    <div className={s.wrapper}>
      <UserImage user={props.user} />
      <div className={s.dialog}>
        <NavLink
          to={"/dialogs/user" + props.user.id}
          className={({ isActive }) => (isActive ? s.activeLink : undefined)}
        >
          {props.user.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
