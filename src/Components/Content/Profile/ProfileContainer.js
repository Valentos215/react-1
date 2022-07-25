import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let usId = this.props.match.params.id || this.props.authorId;
    this.props.getUserProfile(usId);
    this.props.getUserStatus(usId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profileData: state.profileData,
  isFetching: state.profileData.isFetching,
  status: state.profileData.status,
  authorId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
