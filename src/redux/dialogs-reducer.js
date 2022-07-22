const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    {
      id: 1,
      message: "First message about weather",
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newId = state.messagesData.length + 1;
      let newMessage = {
        id: newId,
        message: action.messageText,
        usId: "i",
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };

    default:
      return state;
  }
};

export const sendMessage = (messageText) => ({
  type: SEND_MESSAGE,
  messageText,
});

export default dialogsReducer;
