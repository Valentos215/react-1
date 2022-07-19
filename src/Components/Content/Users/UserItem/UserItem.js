import { usersAPI } from "../../../../api/api";
import UserImage from "../../../User/UserImage/UserImage";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  let button = () => (props.user.followed ? "Unfollow" : "Follow");

  const onButtonClick = () => {
    if (props.followingInProgress !== props.user.id) {
      props.toggleFollowingProgress(props.user.id);
      if (props.user.followed) {
        usersAPI.unfollow(props.user.id).then((data) => {
          if (data.resultCode === 0) props.unfollow(props.user.id);
          props.toggleFollowingProgress(false);
        });
      } else {
        usersAPI.follow(props.user.id).then((data) => {
          if (data.resultCode === 0) props.follow(props.user.id);
          props.toggleFollowingProgress(false);
        });
      }
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <UserImage user={props.user} />
        <div
          className={
            props.followingInProgress === props.user.id
              ? s.buttonProcessed
              : s.button
          }
          onClick={onButtonClick}
        >
          {button()}
        </div>
      </div>
      <div className={s.usInfo}>
        <div className={s.left}>
          <div className={s.name}>{props.user.name}</div>
          <div className={s.status}>{props.user.status}</div>
        </div>
        <div className={s.right}>
          <div className={s.country}>
            {props.user.location !== undefined
              ? props.user.location.country + ","
              : null}
          </div>
          <div className={s.city}>
            {props.user.location !== undefined
              ? props.user.location.city
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
