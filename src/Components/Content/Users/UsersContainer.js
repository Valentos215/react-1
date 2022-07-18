import { connect } from "react-redux";
import {
  follow,
  setPage,
  setTotalCount,
  setUsers,
  toggleFatching,
  unfollow,
} from "../../../redux/users-reducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleFatching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  clickOnPageNum = (page) => {
    this.props.toggleFatching(true);
    this.props.setPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.toggleFatching(false);
        this.props.setUsers(response.data.items);
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
