import s from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount && i <= 30; i++) {
    pages.push(i);
  }
  return (
    <div className={s.wrapper}>
      {pages.map((p) => (
        <span
          key={p}
          className={props.currentPage === p ? s.selectedPage : null}
          onClick={() => props.clickOnPageNum(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
