import s from "./MyPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";
import { usersData, postData } from "../../../../DataBase";

const MyPosts = () => {
  const postsArray = postData.map((post, i) => (
    <PostedItem
      postText={post.text}
      likes={post.likes}
      image={usersData[i].image}
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
