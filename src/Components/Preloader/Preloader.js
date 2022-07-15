import s from "./Preloader.module.css";
import preloading from "../../Images/preloader2.gif";

const Preloader = () => (
  <div className={s.preloader}>
    <img alt="HZ" src={preloading} />
  </div>
);

export default Preloader;
