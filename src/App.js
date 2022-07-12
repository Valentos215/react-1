import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header store={props.store} />
      <Navbar store={props.store} />
      <div className="content">
        <Routes>
          <Route path="/profile/" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={props.store} />}
          />
          <Route path="/news/" element={<News store={props.store} />} />
          <Route path="/music/" element={<Music store={props.store} />} />
          <Route path="/settings/" element={<Settings store={props.store} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

<Route path="/profile" element={<Profile />} />;
