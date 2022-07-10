import React from "react";
import UsPosts from "./UsPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profile-reducer";

const UsPostsContainer = (props) => {
  let updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };
  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <UsPosts
      onPostChange={updateNewPostText}
      onButtonClick={addNewPost}
      wallData={props.store.getState().profileData.wallData}
      users={props.store.getState().usersData.users}
      newPostBody={props.store.getState().profileData.newPost}
    />
  );
};

export default UsPostsContainer;
