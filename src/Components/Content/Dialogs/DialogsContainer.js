import { sendMessage, changeMessage } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    dialogsPage: state.dialogsPage,
    users: state.usersData.users,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  changeMessage,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
