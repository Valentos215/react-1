import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.image}>
        <img alt="HZ" src={props.image}></img>
      </div>
      <div className={s.name}>{props.name}</div>
    </div>
  );
};

export default User;
