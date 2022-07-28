import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus } from "../../redux/profile-reducer";
import { requestUsers } from "../../redux/users-reducer";
import React from "react";

const Navbar = React.memo((props) => {
  const navArray = [
    { id: 1, title: "Profile", link: "/profile" },
    { id: 2, title: "Dialogs", link: "/dialogs" },
    { id: 3, title: "News", link: "/news" },
    { id: 4, title: "Music", link: "/music" },
    { id: 5, title: "Settings", link: "/settings" },
  ];
  const clickOnProfile = () => {
    props.getUserProfile(props.authorId);
    props.getUserStatus(props.authorId);
  };

  const navMenu = navArray.map((item) => (
    <NavItem
      title={item.title}
      link={item.link}
      key={item.id}
      clickOnProfile={clickOnProfile}
    />
  ));

  return (
    <nav className={s.nav}>
      <div className={s.menu}>{navMenu}</div>
      <Friends users={props.users} requestUsers={props.requestUsers} />
    </nav>
  );
});

let mapStateToProps = (state) => ({
  authorId: state.auth.id,
  users: state.usersData.users,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getUserStatus,
  requestUsers,
})(Navbar);
