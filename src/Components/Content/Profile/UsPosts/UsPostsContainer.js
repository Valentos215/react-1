import UsPosts from "./UsPosts";
import { addPost } from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    wallData: state.profileData.myProfile.wallData,
    users: state.usersData.users,
  };
};

export default connect(mapStateToProps, { addPost })(UsPosts);
