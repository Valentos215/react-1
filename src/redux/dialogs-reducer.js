const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [{ id: 1, message: "First message about weather", usId: 1 }],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageBody: action.messageText };

    case SEND_MESSAGE:
      let newId = state.messagesData.length + 1;
      let newMessage = {
        id: newId,
        message: state.newMessageBody,
        usId: "i",
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageBody: "",
      };

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
