import s from "./PostedItem.module.css";

const PostedItem = (props) => {
  return (
    <div className={s.item}>
      <div className={s.icon}>
        <img alt="HZ" src={props.image}></img>
      </div>
      <div className={s.text}>{props.postText}</div>
      <div className={s.likes}>{props.likes}</div>
      <div className={s.like}>Like</div>
    </div>
  );
};

export default PostedItem;
