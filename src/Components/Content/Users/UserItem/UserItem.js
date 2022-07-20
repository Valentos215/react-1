import UserImage from "../../../User/UserImage/UserImage";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  let buttonText = props.user.followed ? "Unfollow" : "Follow";

  const onButtonClick = () => {
    if (props.followingInProgress !== props.user.id) {
      props.followClick(props.user.id, props.user.followed);
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
          {buttonText}
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
