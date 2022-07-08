import User from "../../User/User";
import s from "./Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  const friends = props.store
    .getState()
    .usersData.slice(0, 3)
    .map((f) => <User user={f} />);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <NavLink to="/friends">Friends</NavLink>
      </div>
      <div className={s.friendsArea}>{friends}</div>
    </div>
  );
};

export default Friends;
