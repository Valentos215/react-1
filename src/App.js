import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header store={props.store} />
      <Navbar store={props.store} />
      <div className="content">
        <Routes>
          <Route
            path="/profile/:id"
            element={<ProfileContainer store={props.store} />}
          />
          <Route
            path="/profile"
            element={<ProfileContainer store={props.store} />}
          />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news/" element={<News store={props.store} />} />
          <Route path="/music/" element={<Music store={props.store} />} />
          <Route path="/settings/" element={<Settings store={props.store} />} />
          <Route path="/users/" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
