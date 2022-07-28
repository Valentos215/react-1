import React from "react";
import UserItem from "./UserItem/UserItem";
import s from "./Users.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";

const Users = (props) => {
  const userList = props.users.map((u) => (
    <UserItem
      user={u}
      key={u.id}
      followingInProgress={props.followingInProgress}
      followClick={props.followClick}
    />
  ));

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Users</div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        portionSize={10}
        currentPage={props.currentPage}
        clickOnPageNum={props.clickOnPageNum}
      />
      <div className={s.usersArea}>
        {props.isFetching ? <Preloader /> : userList}
      </div>
    </div>
  );
};

export default Users;
