import { connect } from "react-redux";
import {
  followAC,
  setPageAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC,
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (page) => {
      dispatch(setPageAC(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
  };
};
//
//
class UsersAPI extends React.Component {
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

  clickOnPageNum = (page) => {
    this.props.setPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
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
      />
    );
  }
}
//

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
export default UsersContainer;
