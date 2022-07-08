import s from "./Dialogs.module.css";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import state from "../../../redux/state";
import FriendMessage from "./FriendMessage/FriendMessage";
import NewMessage from "./NewMessage copy/NewMessage";

const Dialogs = (props) => {
  const dialogsArray = state.usersData
    .filter((us) => us.d)
    .map((d) => <DialogItem user={d} />);

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogs</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>{dialogsArray}</div>
        <div className={s.line}></div>

        <div className={s.messages}>
          <MyMessage message={state.messagesData[2].message} />
          <FriendMessage
            user={state.usersData[2]}
            message={state.messagesData[0].message}
          />
          <NewMessage />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
