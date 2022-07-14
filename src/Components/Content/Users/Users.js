import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
            className={props.currentPage === p ? s.selectedPage : null}
            onClick={() => props.clickOnPageNum(p)}
          >
            {p}
          </span>
        ))}
      </div>
      <div className={s.usersArea}>
        <div>
          {props.users.map((u) => (
            <UserItem
              user={u}
              key={u.id}
              follow={props.follow}
              unfollow={props.unfollow}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
