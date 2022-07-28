import UserInfo from "./UserInfo/UserInfo";
import s from "./Profile.module.css";
import UsPosts from "./UsPosts/UsPosts";
import WideImage from "./WideImage/WideImage";
import Preloader from "../../common/Preloader/Preloader";
import React from "react";

const Profile = React.memo((props) => {
  if (!props.profile | props.isFetching) return <Preloader />;
  else
    return (
      <div className={s.profile}>
        <WideImage />
        <UserInfo
          user={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          id={props.match.params.id}
        />
        <UsPosts />
      </div>
    );
});

export default Profile;
