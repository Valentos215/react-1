import s from "./UserInfo.module.css";
import noPhoto from "../../../../Images/08.png";
import Status from "./Status/Status";

const UserInfo = (props) => {
  let month = null;
  let day = null;
  let year = null;
  if (props.user) {
    if (props.user.birthDay) {
      month = props.user.birthDay.toLocaleString("en-US", { month: "long" });
      day = props.user.birthDay.toLocaleString("en-US", { day: "2-digit" });
      year = props.user.birthDay.getFullYear();
    }
  }
  return (
    <div className={s.user}>
      <Status
        status={props.status}
        updateStatus={props.updateStatus}
        id={props.id}
      />
      <div className={s.image}>
        <img
          alt="HZ"
          src={props.user.photos.large ? props.user.photos.large : noPhoto}
        ></img>
      </div>
      <div className={s.description}>
        <div className={s.name}>
          {props.user.fullName ? props.user.fullName : null}
        </div>
        <div className={s.data}>
          <ul>
            <li>
              Date of Birth: {day} {month} {year}
            </li>
            <li>
              City:{" "}
              <a href="https://google.com">
                {props.user.location ? props.user.location.city : null}
              </a>
            </li>
            <li>
              About Me:{" "}
              <a href="https://google.com">
                {props.user.aboutMe ? props.user.aboutMe : null}
              </a>
            </li>
            <li>
              Web Site:{" "}
              <a href={props.user.webSite}>
                {props.user.webSite ? props.user.webSite : null}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
