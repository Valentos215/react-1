import s from "./PostedItem.module.css";
import User from "../../../../User/User";

const PostedItem = (props) => {
  return (
    <div className={s.item}>
      <User user={props.user} />
      <div className={s.text}>{props.postText}</div>
      <div className={s.likes}>{props.likes}</div>
      <div className={s.like}>Like</div>
    </div>
  );
};

export default PostedItem;
