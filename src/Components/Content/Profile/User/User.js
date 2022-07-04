import s from "./User.module.css";

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.image}>
        <img
          alt="HZ"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        ></img>
      </div>
      <div className={s.description}>
        <div className={s.name}>Vale K.</div>
        <div className={s.data}>
          <ul>
            <li>Date of Birth: 18 february</li>
            <li>
              City: <a href="https://google.com">Kiev</a>
            </li>
            <li>
              Education: <a href="https://google.com">KPI</a>
            </li>
            <li>
              Web Site: <a href="https://google.com">https://google.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
