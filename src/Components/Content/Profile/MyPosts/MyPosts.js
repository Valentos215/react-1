import s from "./MyPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";
import state from "../../../../redux/state";

const MyPosts = () => {
  const postsArray = state.postData.map((post, i) => (
    <PostedItem
      postText={post.text}
      likes={post.likes}
      image={state.usersData[i].image}
    />
  ));

  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea placeholder="your news..." className={s.input}></textarea>
        </p>
        <div className={s.button}>Send</div>
      </form>
      <div className={s.posted}>{postsArray}</div>
    </div>
  );
};

export default MyPosts;
