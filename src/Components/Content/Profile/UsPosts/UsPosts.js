import React from "react";
import s from "./UsPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";
import state, { addPostData, postChangeData } from "../../../../redux/state";

const UsPosts = (props) => {
  const postsArray = props.posts.map((post, i) => (
    <PostedItem
      postText={post.text}
      likes={post.likes}
      user={state.usersData[post.usId - 1]}
    />
  ));

  let newPostElement = React.createRef();
  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    postChangeData(postMessage);
  };
  let buttonClick = () => {
    addPostData();
  };

  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={state.profileData.newPost}
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
