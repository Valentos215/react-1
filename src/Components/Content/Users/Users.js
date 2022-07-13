import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.getUsers();
    this.props.users.sort((a, b) => b.f - a.f);
  }

  getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.title}>Users</div>
        <div className={s.usersArea}>
          <div>
            {this.props.users.map((u) => (
              <UserItem
                user={u}
                key={u.id}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;

// const Users = (props) => {
//   if (props.users.length === 6) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users")
//       .then((response) => {
//         props.setUsers(response.data.items);
//       });
//   }

//   const usList = props.users.map((u) => (
//     <UserItem
//       user={u}
//       key={u.id}
//       follow={props.follow}
//       unfollow={props.unfollow}
//     />
//   ));

//   return (
//     <div className={s.wrapper}>
//       <div className={s.title}>Users</div>
//       <div className={s.usersArea}>
//         <div>{usList}</div>
//       </div>
//     </div>
//   );
// };
