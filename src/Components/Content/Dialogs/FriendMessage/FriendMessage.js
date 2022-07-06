import s from "./FriendMessage.module.css";
import User from "../../../User/User";
import Message from "../Message/Message";

const FriendMessage = (props) => {
  return (
    <div className={s.message}>
      <Message message={props.message} />
      <User user={props.user} />
    </div>
  );
};

export default FriendMessage;
