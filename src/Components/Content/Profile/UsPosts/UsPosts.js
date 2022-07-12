import React from "react";
import PostedItem from "./PostedItem/PostedItem";
import s from "./UsPosts.module.css";

const UsPosts = (props) => {
  const postsArray = props.wallData.map((post) => (
    <PostedItem
      postText={post.text}
      likes={post.likes}
      user={props.users[post.usId - 1]}
    />
  ));

  const onPostChange = (e) => {
    props.postChange(e.target.value);
  };
  const onButtonClick = () => {
    props.buttonClick();
  };

  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea
            onChange={onPostChange}
            value={props.newPostBody}
            placeholder="your news..."
            className={s.input}
          ></textarea>
        </p>
        <div onClick={onButtonClick} className={s.button}>
          Send
        </div>
      </form>
      <div className={s.posted}>{postsArray}</div>
    </div>
  );
};

export default UsPosts;
