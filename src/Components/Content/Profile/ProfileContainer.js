import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profile-reducer";
import { toggleFatching } from "../../../redux/users-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFatching(true);
    let profileId = this.props.match.params.id;

    if (!profileId) {
      this.props.setUserProfile(this.props.profileData.myProfile);
      this.props.toggleFatching(false);
    } else
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${profileId}`
        )
        .then((response) => {
          this.props.toggleFatching(false);
          this.props.setUserProfile(response.data);
        });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profileData: state.profileData,
  isFetching: state.usersData.isFetching,
});

let ProfileContainerWithUrlDta = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, toggleFatching })(
  ProfileContainerWithUrlDta
);
