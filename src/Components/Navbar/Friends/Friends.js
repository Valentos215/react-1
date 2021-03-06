import User from "../../User/User";
import s from "./Friends.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Friends = ({ requestUsers, users }) => {
  const friends = users.slice(0, 3).map((f) => <User user={f} key={f.id} />);
  useEffect(() => {
    requestUsers(1, 6);
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={s.friendsArea}>{friends}</div>
    </div>
  );
};

export default Friends;
