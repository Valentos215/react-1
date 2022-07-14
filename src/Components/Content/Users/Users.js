import axios from "axios";
import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }

  clickOnPageNum(page) {
    this.props.setPage(page);
    console.log(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 30; i++) {
      pages.push(i);
    }

    return (
      <div className={s.wrapper}>
        <div className={s.title}>Users</div>
        <div className={s.nav}>
          {pages.map((p) => (
            <span
              key={p}
              className={this.props.currentPage === p ? s.selectedPage : null}
              onClick={() => this.clickOnPageNum(p)}
            >
              {p}
            </span>
          ))}
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
