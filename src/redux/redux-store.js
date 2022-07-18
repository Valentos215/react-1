import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import { combineReducers, legacy_createStore } from "redux";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  usersData: usersReducer,
  profileData: profileReducer,
  dialogsPage: dialogsReducer,
  auth: authReducer,
});

const store = legacy_createStore(reducers);

export default store;
