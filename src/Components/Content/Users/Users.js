import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

class Users extends React.Component {
  getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  componentDidMount() {
    this.getUsers();
    this.props.users.sort((a, b) => b.f - a.f);
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.title}>Users</div>
        <div className={s.nav}>
          <span className={s.pNum}>1</span>
          <span className={s.pNum}>2</span>
          <span className={s.pNum}>3</span>
        </div>
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
