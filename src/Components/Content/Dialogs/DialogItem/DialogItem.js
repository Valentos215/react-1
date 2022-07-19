import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";
import UserImage from "../../../User/UserImage/UserImage";

const DialogItem = (props) => {
  return (
    <div className={s.wrapper}>
      <UserImage user={props.user} />
      <div className={s.dialog}>
        <NavLink
          to={"/dialogs/" + props.user.id}
          activeClassName={s.activeLink}
        >
          {props.user.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
