import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAuthUserData: setAuthUserData })(
  HeaderContainer
);
