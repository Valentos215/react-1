import s from "./User.module.css";
import UserImage from "./UserImage/UserImage";

const User = (props) => {
  return (
    <div className={s.user}>
      <UserImage user={props.user} />
      <div className={s.name}>{props.user.name}</div>
    </div>
  );
};

export default User;
