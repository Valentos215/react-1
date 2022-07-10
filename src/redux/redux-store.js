import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import { combineReducers, legacy_createStore } from "redux";

let reducers = combineReducers({
  usersData: usersReducer,
  profileData: profileReducer,
  dialogsPage: dialogsReducer,
});

const store = legacy_createStore(reducers);

export default store;
