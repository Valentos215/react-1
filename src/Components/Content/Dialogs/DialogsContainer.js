import { sendMessage, changeMessage } from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    dialogsPage: state.dialogsPage,
    users: state.usersData.users,
  };
};

export default compose(
  connect(mapStateToProps, {
    changeMessage,
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
