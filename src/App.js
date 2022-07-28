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
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar store={this.props.store} />
          <div className="content">
            <Route
              path="/profile/:id?"
              render={() => <ProfileContainer store={this.props.store} />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route
              path="/music"
              render={() => <Music store={this.props.store} />}
            />
            <Route
              path="/settings"
              render={() => <Settings store={this.props.store} />}
            />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
