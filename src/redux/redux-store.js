import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  usersData: usersReducer,
  profileData: profileReducer,
  dialogsPage: dialogsReducer,
  auth: authReducer,
  app: appReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
