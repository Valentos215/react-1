import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";

const NewMessageContainer = (props) => {
  let updateMessageBody = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  };
  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return (
    <NewMessage
      messageChange={updateMessageBody}
      buttonClick={sendMessage}
      profileData={props.store.getState().profileData}
      newMessageBody={props.store.getState().dialogsPage.newMessageBody}
    />
  );
};

export default NewMessageContainer;
