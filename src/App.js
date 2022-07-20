import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Content/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar store={props.store} />
        <div className="content">
          <Route
            path="/profile/:id?"
            render={() => <ProfileContainer store={props.store} />}
          />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News store={props.store} />} />
          <Route path="/music" render={() => <Music store={props.store} />} />
          <Route
            path="/settings"
            render={() => <Settings store={props.store} />}
          />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
