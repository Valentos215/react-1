import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import UserImage from "./UserImage/UserImage";

const User = (props) => {
  return (
    <div className={s.user}>
      <UserImage user={props.user} />
      <div className={s.name}>
        <NavLink to={"/users/user" + props.user.id}>{props.user.name}</NavLink>
      </div>
    </div>
  );
};

export default User;
