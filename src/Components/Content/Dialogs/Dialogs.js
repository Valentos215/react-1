import s from "./Dialogs.module.css";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./FriendMessage/FriendMessage";
import NewMessage from "./NewMessage copy/NewMessage";

const Dialogs = (props) => {
  const dialogsArray = props.store
    .getState()
    .usersData.users.filter((us) => us.d)
    .map((d) => <DialogItem user={d} />);

  const myMessages = props.store
    .getState()
    .dialogsPage.messagesData.filter((us) => us.usId === "i")
    .map((m) => (
      <MyMessage
        user={props.store.getState().profileData}
        message={m.message}
      />
    ));

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogues</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>{dialogsArray}</div>
        <div className={s.line}></div>

        <div className={s.messages}>
          <FriendMessage
            user={props.store.getState().usersData.users[0]}
            message={props.store.getState().dialogsPage.messagesData[0].message}
          />
          {myMessages}
          <NewMessage store={props.store} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
