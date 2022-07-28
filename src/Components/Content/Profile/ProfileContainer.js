import React, { useEffect } from "react";
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

const ProfileContainer = React.memo((props) => {
  useEffect(() => {
    props.getUserProfile(props.match.params.id || props.authorId);
    props.getUserStatus(props.match.params.id || props.authorId);
  }, []);

  return <Profile {...props} />;
});

let mapStateToProps = (state) => ({
  profile: state.profileData.profile,
  isFetching: state.profileData.isFetching,
  status: state.profileData.status,
  authorId: state.auth.id,
});

export default compose(
  connect(mapStateToProps, { updateStatus, getUserProfile, getUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
