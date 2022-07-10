import image1 from "../Images/01.ppm";
import image2 from "../Images/02.webp";
import image3 from "../Images/03.webp";
import image4 from "../Images/04.webp";
import image5 from "../Images/05.jpg";
import image6 from "../Images/06.jpg";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    usersData: {
      users: [
        { id: 1, name: "Andru", image: image1, f: true, o: true, d: true },
        { id: 2, name: "Ostin", image: image2, f: true, o: false, d: true },
        { id: 3, name: "Mike", image: image3, f: true, o: true, d: true },
        { id: 4, name: "Ivan", image: image4, f: true, o: true, d: false },
        { id: 5, name: "Kolian", image: image5, f: true, bf: true, d: true },
        { id: 6, name: "Vasilii", image: image1, f: false, o: true, d: true },
      ],
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "First message about weather", usId: 3 },
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
    },
    profileData: {
      name: "Vale",
      sureName: "Kharkov",
      city: "Kiev",
      education: "KPI",
      webSite: "https://google.com",
      birthDay: new Date(1992, 2, 18),
      image: image6,
      wallData: [
        { id: 1, text: "Hey, why nobody love me?", likes: 10, usId: 5 },
        { id: 2, text: "Happy message!", likes: 2, usId: 2 },
        { id: 3, text: "Some message for a some day", likes: 0, usId: 2 },
      ],
      newPost: "",
    },
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profileData = profileReducer(this._state.profileData, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this);
  },
};

export default store;
