import s from "./MyPosts.module.css";
import PostedItem from "./PostedItem/PostedItem";

const MyPosts = () => {
  return (
    <div className={s.my_posts}>
      <div className={s.title}>My posts</div>
      <form className={s.form}>
        <p>
          <textarea placeholder="your news..." className={s.input}></textarea>
        </p>
        <div className={s.button}>Send</div>
      </form>
      <div className={s.posted}>
        <PostedItem
          postText="Hey, why nobody love me?"
          likes="10"
          image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        />
        <PostedItem
          postText="Happy message!"
          likes="2"
          image="https://www.yiiframework.com/image/design/logo/yii3_sign.png"
        />
        <PostedItem
          postText="Some message for a some day"
          likes="4"
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/abstract-circle-logo-social-media-template-design-85dfd2220656ad744d0e941d308cf060.jpg?ts=1589825977"
        />
      </div>
    </div>
  );
};

export default MyPosts;