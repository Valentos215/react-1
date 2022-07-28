import { connect } from "react-redux";
import { requestUsers, followClick } from "../../../redux/users-reducer";
import React from "react";
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
class UsersContainer extends React.Component {
  componentDidMount() {
    const { requestUsers, currentPage, pageSize } = this.props;
    requestUsers(currentPage, pageSize);
  }

  clickOnPageNum = (page) => {
    const { requestUsers, pageSize } = this.props;
    requestUsers(page, pageSize, page);
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        clickOnPageNum={this.clickOnPageNum}
        followClick={this.props.followClick}
      />
    );
  }
}

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
