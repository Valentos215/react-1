import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.user}>
        <div className={s.image}>
          <img alt="HZ" src={props.image}></img>
        </div>
        <div className={s.name}>{props.name}</div>
      </div>
      <div className={s.text}>{props.message}</div>
    </div>
  );
};

export default Message;
