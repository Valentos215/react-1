import s from "./MyMessage.module.css";
import User from "../../../User/User";
import Message from "../Message/Message";

const MyMessage = (props) => {
  return (
    <div className={s.message}>
      <User user={props.user} />
      <Message message={props.message} />
    </div>
  );
};

export default MyMessage;
