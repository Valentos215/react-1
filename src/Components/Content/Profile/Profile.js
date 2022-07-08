import UsPosts from "./UsPosts/UsPosts";
import UserInfo from "./UserInfo/UserInfo";
import s from "./Profile.module.css";
import state from "../../../redux/state";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.wide_image}>
        <img
          alt="HZ"
          src="https://image.shutterstock.com/image-photo/wide-panorama-beautiful-autumn-field-260nw-751127782.jpg"
        ></img>
      </div>
      <UserInfo user={state.profileData} />
      <UsPosts posts={state.profileData.wallData} />
    </div>
  );
};

export default Profile;
