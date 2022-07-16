import UsPosts from "./UsPosts";
import { addPost, changePost } from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    wallData: state.profileData.myProfile.wallData,
    newPostBody: state.profileData.newPost,
    users: state.usersData.users,
  };
};

const UsPostsContainer = connect(mapStateToProps, { changePost, addPost })(
  UsPosts
);

export default UsPostsContainer;
