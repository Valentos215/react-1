const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [{ id: "", message: "", usId: "" }],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.messageText;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let newId = state.messagesData.length + 1;
      let newMessage = {
        id: newId,
        message: state.newMessageBody,
        usId: "i",
      };
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageText: text,
});

export default dialogsReducer;
