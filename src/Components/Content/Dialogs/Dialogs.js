import s from "./Dialogs.module.css";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./FriendMessage/FriendMessage";
import NewMessage from "./NewMessage/NewMessage";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { sendMessage } from "../../../redux/dialogs-reducer";

const Dialogs = React.memo((props) => {
  const dialogsArray = props.users
    .slice(0, 10)
    .map((d) => <DialogItem user={d} key={d.id} />);

  const myMessages = props.dialogsPage.messagesData
    .filter((us) => us.usId === "i")
    .map((m) => (
      <MyMessage
        user={props.profileData.myProfile}
        message={m.message}
        key={m.id}
      />
    ));

  return (
    <div className={s.dialogs}>
      <div className={s.title}>Dialogues</div>
      <div className={s.wrapper}>
        <div className={s.dialogsArea}>{dialogsArray}</div>
        <div className={s.line}></div>

        <div className={s.messages}>
          <FriendMessage
            user={props.users[0]}
            message={props.dialogsPage.messagesData[0].message}
          />
          {myMessages}
          <NewMessage
            sendMessage={props.sendMessage}
            profileData={props.profileData}
          />
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
    dialogsPage: state.dialogsPage,
    users: state.usersData.users,
  };
};

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs);
