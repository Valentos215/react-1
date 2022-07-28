import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_RESPONSE_ERROR = "SET_RESPONSE_ERROR";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  responseError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };

    case SET_RESPONSE_ERROR:
      return { ...state, responseError: action.errorText };

    default:
      return state;
  }
};

const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { id, email, login, isAuth },
});
const setResponseError = (errorText) => ({
  type: SET_RESPONSE_ERROR,
  errorText,
});

export const getAuthUserData = () => async (dispatch) => {
  let data = await authAPI.getAuthMe();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  } else {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const login =
  (email, password, rememberMe = false) =>
  async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    dispatch(setResponseError(null));
    dispatch(setAuthUserData(null, null, null, 0));
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(setAuthUserData(null, null, null, false));
      dispatch(
        setResponseError(
          data.messages.length > 0 ? data.messages : "Some server error"
        )
      );
    }
  };

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
