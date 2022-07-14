import { connect } from "react-redux";
import {
  followAC,
  setPageAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC,
} from "../../../redux/users-reducer";
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
