import { profileAPI } from "../api/api";
import image6 from "../Images/06.jpg";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_MY_PROFILE = "SET_MY_PROFILE";
const TOGGLE_PROFILE_FATCHING = "TOGGLE_PROFILE_FATCHING";
const SET_STATUS = "SET_STATUS";

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
  isFetching: false,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newId = state.myProfile.wallData.length + 1;
      let newPost = {
        id: newId,
        text: action.postText,
        likes: 0,
        usId: 2,
      };
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          wallData: [...state.myProfile.wallData, newPost],
        },
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_MY_PROFILE:
      return { ...state, profile: state.myProfile };

    case TOGGLE_PROFILE_FATCHING:
      return { ...state, isFetching: action.isFatching };

    case SET_STATUS:
      return { ...state, status: action.statusText };

    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setMyProfile = () => ({
  type: SET_MY_PROFILE,
});
export const toggleProfileFatching = (isFatching) => ({
  type: TOGGLE_PROFILE_FATCHING,
  isFatching,
});
export const setStatus = (statusText) => ({
  type: SET_STATUS,
  statusText,
});

export const getUserProfile = (currentId) => (dispatch) => {
  dispatch(toggleProfileFatching(true));
  profileAPI.getUserProfile(currentId).then((data) => {
    dispatch(setUserProfile(data));
    dispatch(toggleProfileFatching(false));
  });
};

export const getUserStatus = (id) => async (dispatch) => {
  let data = await profileAPI.getUserStatus(id);
  if (data) dispatch(setStatus(data));
  else dispatch(setStatus(""));
};

export const updateStatus = (newStatusText) => async (dispatch) => {
  let data = await profileAPI.updateStatus(newStatusText);
  if (data.resultCode === 0) dispatch(setStatus(newStatusText));
};

export default profileReducer;
