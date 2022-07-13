import s from "./UserImage.module.css";
import { NavLink } from "react-router-dom";
import noPhoto from "../../../Images/08.png";

const UserImage = (props) => {
  const link = (user) => {
    if (user.id) return "/users/user" + user.id;
    else return "/profile";
  };
  return (
    <NavLink to={link(props.user)}>
      <div className={s.image}>
        <img
          alt="HZ"
          src={
            props.user.photos.small !== null ? props.user.photos.small : noPhoto
          }
        ></img>
      </div>
    </NavLink>
  );
};

export default UserImage;
