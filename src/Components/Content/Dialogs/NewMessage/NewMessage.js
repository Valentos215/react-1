import React from "react";
import s from "./NewMessage.module.css";
import User from "../../../User/User";

const NewMessage = (props) => {
  let onMessageChange = (e) => {
    props.changeMessage(e.target.value);
  };
  let onButtonClick = () => {
    props.sendMessage();
  };

  return (
    <div className={s.wrapper}>
      <User user={props.profileData} />
      <form className={s.form}>
        <input
          onChange={onMessageChange}
          value={props.newMessageBody}
          rows="3"
          className={s.input}
          type="textarea"
          placeholder="insert your message"
        ></input>
        <div onClick={onButtonClick} className={s.button}>
          Send
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
