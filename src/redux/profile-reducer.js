import image6 from "../Images/06.jpg";

const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  myProfile: {
    name: "Vale",
    sureName: "Kharkov",
    location: { country: "Ukraine", city: "Kiev" },
    aboutMe: "KPI",
    webSite: "https://google.com",
    birthDay: new Date(1992, 2, 18),
    photos: { small: image6, large: image6 },
    wallData: [
      { id: 1, text: "Hey, why nobody love me?", likes: 10, usId: 1 },
      { id: 2, text: "Happy message!", likes: 2, usId: 2 },
      { id: 3, text: "Some message for a some day", likes: 0, usId: 3 },
    ],
  },
  profile: null,
  newPost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST:
      return { ...state, newPost: action.postMessage };

    case ADD_POST:
      let newId = state.myProfile.wallData.length + 1;
      let newPost = {
        id: newId,
        text: state.newPost,
        likes: 0,
        usId: 1,
      };
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          wallData: [...state.myProfile.wallData, newPost],
        },
        newPost: "",
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const changePost = (text) => ({
  type: CHANGE_POST,
  postMessage: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
