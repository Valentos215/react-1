import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import state from "../../../redux/state";

const Dialogs = (props) => {
  const dialogsArray = state.usersData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesArray = state.messagesData.map((mes, i) => (
    <Message
      name={state.usersData[i].name}
      image={state.usersData[i].image}
      message={mes.message}
    />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogs</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>{dialogsArray}</div>
        <div className={s.line}></div>

        <div className={s.messages}>{messagesArray}</div>
      </div>
    </div>
  );
};

export default Dialogs;
