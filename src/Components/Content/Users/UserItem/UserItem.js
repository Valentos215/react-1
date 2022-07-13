import UserImage from "../../../User/UserImage/UserImage";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  let onButtonClick = () => {
    if (props.user.f) {
      props.unfollow(props.user.id);
    } else {
      props.follow(props.user.id);
    }
  };
  let button = () => (props.user.f ? "Unfollow" : "Follow");

  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <UserImage user={props.user} />
        <div className={s.butoon} onClick={onButtonClick}>
          {button()}
        </div>
      </div>
      <div className={s.usInfo}>
        <div className={s.left}>
          <div className={s.name}>{props.user.name}</div>
          <div className={s.status}>{props.user.status}</div>
        </div>
        <div className={s.right}>
          <div className={s.country}>{props.user.country},</div>
          <div className={s.city}>{props.user.city}</div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
