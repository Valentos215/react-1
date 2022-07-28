import s from "./UserImage.module.css";
import { NavLink } from "react-router-dom";
import noPhoto from "../../../Images/08.png";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus } from "../../../redux/profile-reducer";

const UserImage = (props) => {
  const link = (user) => {
    if (user.id) return "/profile/" + user.id;
    else return "/profile";
  };
  const getUserData = () => {
    props.getUserProfile(props.user.id || props.authorId);
    props.getUserStatus(props.user.id || props.authorId);
  };
  return (
    <NavLink to={link(props.user)} onClick={getUserData}>
      <div className={s.image}>
        <img
          alt="HZ"
          src={props.user.photos.small ? props.user.photos.small : noPhoto}
        ></img>
      </div>
    </NavLink>
  );
};
let mapStateToProps = (state) => ({
  authorId: state.auth.id,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
})(UserImage);
