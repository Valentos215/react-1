import s from "./UserInfo.module.css";
import state from "../../../../redux/state";

const UserInfo = () => {
  let uState = state.profileData;
  const month = uState.birthDay.toLocaleString("en-US", { month: "long" });
  const day = uState.birthDay.toLocaleString("en-US", { day: "2-digit" });
  const year = uState.birthDay.getFullYear();
  return (
    <div className={s.user}>
      <div className={s.image}>
        <img alt="HZ" src={uState.image}></img>
      </div>
      <div className={s.description}>
        <div className={s.name}>
          {uState.name} {uState.sureName[0]}.
        </div>
        <div className={s.data}>
          <ul>
            <li>
              Date of Birth: {day} {month} {year}
            </li>
            <li>
              City: <a href="https://google.com">{uState.city}</a>
            </li>
            <li>
              Education: <a href="https://google.com">{uState.education}</a>
            </li>
            <li>
              Web Site: <a href={uState.webSite}>{uState.webSite}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
