import React from "react";
import s from "./NewMessage.module.css";
import User from "../../../User/User";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form className={s.form}>
      <Field
        className={s.input}
        name={"newMessageBody"}
        component={"textarea"}
        placeholder="insert your message"
      />
      <div onClick={props.handleSubmit} className={s.button}>
        Send
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "newMessage",
})(MessageForm);

const NewMessage = (props) => {
  const onSubmit = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={s.wrapper}>
      <User user={props.profileData.myProfile} />
      <MessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewMessage;
