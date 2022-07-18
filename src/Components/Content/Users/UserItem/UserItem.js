import axios from "axios";
import UserImage from "../../../User/UserImage/UserImage";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  let onButtonClick = () => {
    if (props.user.followed) {
      axios
        .delete(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
          {
            withCredentials: true,
            headers: { "API-KEY": " 4bef36b2-4ada-472f-9051-da2cddd347fa" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) props.unfollow(props.user.id);
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
          {},
          {
            withCredentials: true,
            headers: { "API-KEY": " 4bef36b2-4ada-472f-9051-da2cddd347fa" },
          }
        )
        .then((response) => {
          if (response.data.resultCode === 0) props.follow(props.user.id);
        });
    }
  };
  let button = () => (props.user.followed ? "Unfollow" : "Follow");

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
