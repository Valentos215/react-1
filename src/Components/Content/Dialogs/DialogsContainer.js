import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    dialogsPage: state.dialogsPage,
    users: state.usersData.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    messageChange: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
    buttonClick: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
