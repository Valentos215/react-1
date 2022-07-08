import React from "react";
import s from "./UsPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";

const UsPosts = (props) => {
  const postsArray = props.store
    .getState()
    .profileData.wallData.map((post) => (
      <PostedItem
        postText={post.text}
        likes={post.likes}
        user={props.store.getState().usersData[post.usId - 1]}
      />
    ));

  let newPostElement = React.createRef();
  let onPostChange = () => {
    let postMessage = newPostElement.current.value;
    props.store.postChangeData(postMessage);
  };
  let buttonClick = () => {
    props.store.addPostData();
  };

  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea
            ref={newPostElement}
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
