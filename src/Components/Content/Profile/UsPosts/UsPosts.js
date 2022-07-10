import React from "react";
import s from "./UsPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../../redux/profile-reducer";

const UsPosts = (props) => {
  let onPostChange = (e) => {
    props.store.dispatch(updateNewPostActionCreator(e.target.value));
  };
  let buttonClick = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const postsArray = props.store
    .getState()
    .profileData.wallData.map((post) => (
      <PostedItem
        postText={post.text}
        likes={post.likes}
        user={props.store.getState().usersData.users[post.usId - 1]}
      />
    ));

  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea
            onChange={onPostChange}
            value={props.store.getState().profileData.newPost}
            placeholder="your news..."
            className={s.input}
          ></textarea>
        </p>
        <div onClick={buttonClick} className={s.button}>
          Send
        </div>
      </form>
      <div className={s.posted}>{postsArray}</div>
    </div>
  );
};

export default UsPosts;
