import React, { useState } from "react";
import s from "./Status.module.css";

const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusBody, setStatusBody] = useState(props.status);
  const [overflow, setOverflow] = useState(false);

  const statusText = () => {
    if (props.status) {
      return props.status;
    } else if (!props.id) return "Insert your status";
    else return "No status";
  };

  const activateEditMode = () => {
    if (!props.id) setEditMode(true);
  };

  const escapeKey = (e) => {
    if (e.key === "Escape") {
      setEditMode(false);
      setStatusBody(props.status);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(statusBody);
  };

  const changeStatus = (e) => {
    setOverflow(false);
    if (e.target.value.length > 50) setOverflow(true);
    else setStatusBody(e.target.value);
  };

  return (
    <div className={s.status}>
      {!editMode ? (
        <div
          className={props.status ? s.currentStatus : s.emtyStatus}
          onDoubleClick={activateEditMode}
        >
          {statusText()}
        </div>
      ) : (
        <div className={s.newStatus}>
          <input
            className={overflow ? s.overflow : s.input}
            type="text"
            onKeyDown={escapeKey}
            onBlur={deactivateEditMode}
            autoFocus={true}
            onChange={changeStatus}
            value={statusBody}
          ></input>
        </div>
      )}
    </div>
  );
};

export default Status;
