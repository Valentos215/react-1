import UsPosts from "./UsPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    wallData: state.profileData.wallData,
    newPostBody: state.profileData.newPost,
    users: state.usersData.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postChange: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    buttonClick: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const UsPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UsPosts);

export default UsPostsContainer;
