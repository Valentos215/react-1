import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setPage,
  setTotalCount,
  setUsers,
  toggleFatching,
  toggleFollowingProgress,
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import { usersAPI } from "../../../api/api";
class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleFatching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleFatching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  clickOnPageNum = (page) => {
    this.props.toggleFatching(true);
    this.props.setPage(page);

    usersAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleFatching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        clickOnPageNum={this.clickOnPageNum}
        onFollowClick={this.onFollowClick}
        currentPage={this.props.currentPage}
        users={this.props.users}
        isFetching={this.props.isFetching}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
    followingInProgress: state.usersData.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalCount,
  toggleFatching,
  toggleFollowingProgress,
})(UsersAPI);
export default UsersContainer;
