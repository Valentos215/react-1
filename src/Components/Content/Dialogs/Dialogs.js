import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { usersData, messagesData } from "../../../DataBase";

const Dialogs = (props) => {
  const dialogsArray = usersData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesArray = messagesData.map((mes, i) => (
    <Message
      name={usersData[i].name}
      image={usersData[i].image}
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
