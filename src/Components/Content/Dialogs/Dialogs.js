import s from "./Dialogs.module.css";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./FriendMessage/FriendMessage";
import NewMessage from "./NewMessage copy/NewMessage";

const Dialogs = (props) => {
  const dialogsArray = props.store
    .getState()
    .usersData.filter((us) => us.d)
    .map((d) => <DialogItem user={d} />);

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogs</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>{dialogsArray}</div>
        <div className={s.line}></div>

        <div className={s.messages}>
          <MyMessage
            user={props.store.getState().profileData}
            message={props.store.getState().dialogsPage.messagesData[0].message}
          />
          <FriendMessage
            user={props.store.getState().usersData[2]}
            message={props.store.getState().dialogsPage.messagesData[2].message}
          />
          <NewMessage store={props.store} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
