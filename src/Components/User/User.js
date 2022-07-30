import s from "./User.module.css";
import UserImage from "./UserImage/UserImage";

const User = (props) => {
  console.log(props.user.name);

  return (
    <div className={s.user}>
      <UserImage user={props.user} />
      <div className={s.name}>{props.user.name.slice(0, 9)}</div>
    </div>
  );
};

export default User;
