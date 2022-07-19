import { connect } from "react-redux";
import {
  follow,
  setPage,
  setTotalCount,
  setUsers,
  toggleFatching,
  unfollow,
} from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import { usersAPI } from "../../../api/api";

const mapStateToProps = (state) => {
  return {
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
  };
};
//
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
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalCount,
  toggleFatching,
})(UsersAPI);
export default UsersContainer;
