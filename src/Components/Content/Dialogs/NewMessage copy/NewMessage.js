import React from "react";
import s from "./NewMessage.module.css";
import User from "../../../User/User";

const NewMessage = (props) => {
  let newMessage = React.createRef();
  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.wrapper}>
      <User user={props.store.getState().profileData} />
      <form className={s.form}>
        <input
          rows="3"
          ref={newMessage}
          className={s.input}
          type="textarea"
          placeholder="insert your message"
        ></input>
        <div onClick={sendMessage} className={s.button}>
          Send
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
