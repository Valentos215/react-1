import s from "./UserInfo.module.css";
import noPhoto from "../../../../Images/08.png";
import Status from "./Status/Status";

const UserInfo = ({ user, status, updateStatus, id }) => {
  let month = null;
  let day = null;
  let year = null;
  if (user) {
    if (user.birthDay) {
      month = user.birthDay.toLocaleString("en-US", { month: "long" });
      day = user.birthDay.toLocaleString("en-US", { day: "2-digit" });
      year = user.birthDay.getFullYear();
    }
  }

  return (
    <div className={s.user}>
      <Status status={status} updateStatus={updateStatus} id={id} />
      <div className={s.image}>
        <img
          alt="HZ"
          src={user.photos.large ? user.photos.large : noPhoto}
        ></img>
      </div>
      <div className={s.description}>
        <div className={s.name}>{user.fullName ? user.fullName : null}</div>
        <div className={s.data}>
          <ul>
            <li>
              Date of Birth: {day} {month} {year}
            </li>
            <li>
              City:{" "}
              <a href="https://google.com">
                {user.location ? user.location.city : null}
              </a>
            </li>
            <li>
              About Me:{" "}
              <a href="https://google.com">
                {user.aboutMe ? user.aboutMe : null}
              </a>
            </li>
            <li>
              Web Site:{" "}
              <a href={user.webSite}>{user.webSite ? user.webSite : null}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
