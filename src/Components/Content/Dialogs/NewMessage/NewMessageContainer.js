import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    newMessageBody: state.dialogsPage.newMessageBody,
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

const NewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);
export default NewMessageContainer;
