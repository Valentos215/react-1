import axios from "axios";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 6) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  //   props.users.sort((a, b) => {
  //     if (a.f < b.f) {
  //       return 1;
  //     }
  //     if (a.f > b.f) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  const usList = props.users.map((u) => (
    <UserItem
      user={u}
      key={u.id}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Users</div>
      <div className={s.usersArea}>
        <div>{usList}</div>
      </div>
    </div>
  );
};

export default Users;
