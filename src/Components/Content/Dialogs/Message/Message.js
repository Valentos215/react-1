import s from "./Message.module.css";
import User from "./User/User";

const Message = (props) => {
  return (
    <div className={s.message}>
      <User name={props.name} image={props.image} />
      <div className={s.text}>{props.message}</div>
    </div>
  );
};

export default Message;
