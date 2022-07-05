import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.wide_image}>
        <img
          alt="HZ"
          src="https://image.shutterstock.com/image-photo/wide-panorama-beautiful-autumn-field-260nw-751127782.jpg"
        ></img>
      </div>
      <UserInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
