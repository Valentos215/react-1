import s from "./UserImage.module.css";
import { NavLink } from "react-router-dom";

const UserImage = (props) => {
  return (
    <div className={s.image}>
      <img alt="HZ" src={props.user.image}></img>
    </div>
  );
};

export default UserImage;
