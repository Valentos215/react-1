import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          alt="HZ"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png"
        ></img>
      </div>
    </header>
  );
};

export default Header;
