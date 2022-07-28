import { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  clickOnPageNum,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize;
  let rightPortionPageNumber = portionNumber * portionSize + 1;
  let pages = [];
  for (let i = leftPortionPageNumber + 1; i < rightPortionPageNumber; i++) {
    pages.push(i);
  }

  return (
    <div className={s.wrapper}>
      {leftPortionPageNumber !== 0 && (
        <div
          className={s.portion}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            clickOnPageNum(leftPortionPageNumber);
          }}
        >
          {"..." + leftPortionPageNumber}
        </div>
      )}
      <div className={s.pages}>
        {pages.map((p) => (
          <span
            key={p}
            className={currentPage === p ? s.selectedPage : null}
            onClick={() => clickOnPageNum(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {rightPortionPageNumber < portionCount && (
        <div
          className={s.portion}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            clickOnPageNum(rightPortionPageNumber);
          }}
        >
          {rightPortionPageNumber + "..."}
        </div>
      )}
    </div>
  );
};

export default Paginator;
