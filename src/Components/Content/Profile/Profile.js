import UserInfo from "./UserInfo/UserInfo";
import s from "./Profile.module.css";
import UsPostsContainer from "./UsPosts/UsPostsContainer";
import WideImage from "./WideImage/WideImage";
import Preloader from "../../Preloader/Preloader";

const Profile = (props) => {
  if (!props.profileData.profile | props.isFetching) return <Preloader />;
  else
    return (
      <div className={s.profile}>
        <WideImage />
        <UserInfo
          user={props.profileData.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          id={props.match.params.id}
        />
        <UsPostsContainer store={props.store} />
      </div>
    );
};

export default Profile;
