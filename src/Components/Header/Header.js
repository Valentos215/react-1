import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          alt="HZ"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png"
        ></img>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.logined}>
            <NavLink to={"/settings"}>{props.login}</NavLink>
            <div onClick={() => props.logout()} className={s.logout}>
              Log out
            </div>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
