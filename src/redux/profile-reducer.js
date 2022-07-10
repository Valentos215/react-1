const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  name: "",
  sureName: "",
  city: "",
  education: "",
  webSite: "",
  birthDay: new Date(),
  image: "",
  wallData: [{ id: 1, text: "", likes: 0, usId: 1 }],
  newPost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPost = action.postMessage;
      return state;

    case ADD_POST:
      let newId = state.wallData.length + 1;
      let randomUsId = () => {
        let random = Math.round((Math.random() / 2) * 10);
        if (random === 0) return 6;
        else return random;
      };
      let newPost = {
        id: newId,
        text: state.newPost,
        likes: 0,
        usId: 1,
      };
      state.wallData.push(newPost);
      state.newPost = "";
      return state;

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
