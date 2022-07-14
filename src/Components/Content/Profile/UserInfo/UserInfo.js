import s from "./UserInfo.module.css";
import noPhoto from "../../../../Images/08.png";

const UserInfo = (props) => {
  const month = props.user.birthDay.toLocaleString("en-US", { month: "long" });
  const day = props.user.birthDay.toLocaleString("en-US", { day: "2-digit" });
  const year = props.user.birthDay.getFullYear();
  return (
    <div className={s.user}>
      <div className={s.image}>
        <img
          alt="HZ"
          src={props.user.photos.large ? props.user.photos.large : noPhoto}
        ></img>
      </div>
      <div className={s.description}>
        <div className={s.name}>
          {props.user.name} {props.user.sureName[0]}.
        </div>
        <div className={s.data}>
          <ul>
            <li>
              Date of Birth: {day} {month} {year}
            </li>
            <li>
              City: <a href="https://google.com">{props.user.location.city}</a>
            </li>
            <li>
              Education: <a href="https://google.com">{props.user.education}</a>
            </li>
            <li>
              Web Site: <a href={props.user.webSite}>{props.user.webSite}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
