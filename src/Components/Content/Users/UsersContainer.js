import { connect } from "react-redux";
import { requestUsers, followClick } from "../../../redux/users-reducer";
import React, { useEffect } from "react";
import Users from "./Users";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsersSuper,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../../redux/users-selectors";

const UsersContainer = React.memo((props) => {
  const { requestUsers, currentPage, pageSize } = props;
  useEffect(() => {
    requestUsers(currentPage, pageSize);
  }, []);

  const clickOnPageNum = (page) => {
    requestUsers(page, pageSize, page);
  };

  return (
    <Users
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      users={props.users}
      isFetching={props.isFetching}
      followingInProgress={props.followingInProgress}
      clickOnPageNum={clickOnPageNum}
      followClick={props.followClick}
    />
  );
});

const mapStateToProps = (state) => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestUsers,
    followClick,
  }),
  withAuthRedirect
)(UsersContainer);
