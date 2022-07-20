import { connect } from "react-redux";
import { getUsers, followClick } from "../../../redux/users-reducer";
import React from "react";
import Users from "./Users";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  clickOnPageNum = (page) => {
    this.props.getUsers(page, this.props.pageSize, page);
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
    users: state.usersData.users,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isFetching: state.usersData.isFetching,
    followingInProgress: state.usersData.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  followClick,
})(UsersContainer);
