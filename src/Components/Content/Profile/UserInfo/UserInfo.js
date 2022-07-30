import s from "./UserInfo.module.css";
import noPhoto from "../../../../Images/08.png";
import Status from "./Status/Status";
import { useState } from "react";
import ProfileForm from "./ProfileForm/ProfileForm";

const UserInfo = ({
  user,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  let contacts = Object.keys(user.contacts).map((key) => {
    if (key && user.contacts[key])
      return (
        <div className={s.field} key={key}>
          {key}:<span> {user.contacts[key]}</span>
        </div>
      );
    return null;
  });
  if (editMode)
    return (
      <ProfileForm
        setEditMode={setEditMode}
        profile={user}
        saveProfile={saveProfile}
      />
    );
  return (
    <div className={s.user}>
      <Status status={status} updateStatus={updateStatus} isOwner={isOwner} />
      <div className={s.avatar}>
        <img
          alt="HZ"
          src={user.photos.large ? user.photos.large : noPhoto}
        ></img>
      </div>
      {isOwner && (
        <input
          type="file"
          className={s.imgLoader}
          accept=".jpg, .jpeg, .png"
          onChange={onMainPhotoSelected}
        ></input>
      )}
      <div className={s.description}>
        <div className={s.name}>{user.fullName ? user.fullName : null}</div>
        <div className={s.data}>
          {user.aboutMe && (
            <div className={s.field}>
              About Me:
              <span> {user.aboutMe}</span>
            </div>
          )}
          {user.lookingForAJobDescription && (
            <div className={s.field}>
              Looking for a job: <span>{user.lookingForAJobDescription}</span>
            </div>
          )}
          {contacts}
          {isOwner && (
            <div className={s.button} onClick={() => setEditMode(true)}>
              Edit profile
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
