const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messagesData: [
    {
      id: 1,
      message:
        "First message about weather, First message about weather, First message about weather",
      usId: 3,
    },
    { id: 2, message: "Second message about a girl", usId: 5 },
    { id: 3, message: "Third message about a food", usId: 6 },
    { id: 4, message: "Fourth message about a message", usId: 1 },
    { id: 5, message: "Fifth message about Hallo!", usId: 2 },
    { id: 6, message: "What a nice day!", usId: 3 },
    { id: 7, message: "The weather is piece of sheet!", usId: 4 },
    { id: 8, message: "How are you?", usId: 1 },
    { id: 9, message: "How many words in this message?", usId: 4 },
    { id: 10, message: "How many words in this message?", usId: 2 },
    { id: 11, message: "How many words in this message?", usId: 3 },
  ],
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
