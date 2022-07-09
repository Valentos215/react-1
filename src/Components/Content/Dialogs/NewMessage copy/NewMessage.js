import React from "react";
import s from "./NewMessage.module.css";
import User from "../../../User/User";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../../redux/state";

const NewMessage = (props) => {
  let onMessageChange = (e) => {
    props.store.dispatch(updateNewMessageActionCreator(e.target.value));
  };
  let buttonClick = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (
    <div className={s.wrapper}>
      <User user={props.store.getState().profileData} />
      <form className={s.form}>
        <input
          onChange={onMessageChange}
          value={props.store.getState().dialogsPage.newMessageBody}
          rows="3"
          className={s.input}
          type="textarea"
          placeholder="insert your message"
        ></input>
        <div onClick={buttonClick} className={s.button}>
          Send
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
