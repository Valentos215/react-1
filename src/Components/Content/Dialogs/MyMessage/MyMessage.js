import s from "./MyMessage.module.css";
import User from "../../../User/User";
import state from "../../../../redux/state";
import Message from "../Message/Message";

const MyMessage = (props) => {
  return (
    <div className={s.message}>
      <User user={state.profileData} />
      <Message message={props.message} />
    </div>
  );
};

export default MyMessage;
