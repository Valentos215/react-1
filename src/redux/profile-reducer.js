import image6 from "../Images/06.jpg";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  name: "Vale",
  sureName: "Kharkov",
  location: { country: "Ukraine", city: "Kiev" },
  education: "KPI",
  webSite: "https://google.com",
  birthDay: new Date(1992, 2, 18),
  photos: { small: image6, large: image6 },
  wallData: [
    { id: 1, text: "Hey, why nobody love me?", likes: 10, usId: 1 },
    { id: 2, text: "Happy message!", likes: 2, usId: 2 },
    { id: 3, text: "Some message for a some day", likes: 0, usId: 3 },
  ],
  newPost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPost: action.postMessage };

    case ADD_POST:
      let newId = state.wallData.length + 1;
      // let randomUsId = () => {
      //   let random = Math.round((Math.random() / 2) * 10);
      //   if (random === 0) return 6;
      //   else return random;
      // };
      let newPost = {
        id: newId,
        text: state.newPost,
        likes: 0,
        usId: 1,
      };
      return {
        ...state,
        wallData: [...state.wallData, newPost],
        newPost: "",
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  postMessage: text,
});

export default profileReducer;
