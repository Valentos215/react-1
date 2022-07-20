import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
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

let ProfileContainerWithUrlDta = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  ProfileContainerWithUrlDta
);
