import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.id);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profileData: state.profileData,
  isFetching: state.profileData.isFetching,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
