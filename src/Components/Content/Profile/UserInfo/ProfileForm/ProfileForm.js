import s from "./ProfileForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProfileForm = ({ setEditMode, profile, saveProfile }) => {
  let fieldsArray = [
    {
      label: "Full name",
      name: "fullName",
      placeholder: "your full name...",
    },
    {
      label: "About me",
      name: "aboutMe",
      placeholder: "something about you...",
    },
    {
      label: "Looking for a job",
      name: "job",
      placeholder: "is that true?",
    },
    { label: "Facebook", name: "facebook", placeholder: "facebook.com/..." },
    { label: "VK", name: "vk", placeholder: "vk.com/..." },
    { label: "Twitter", name: "twitter", placeholder: "twitter.com/..." },
    { label: "Instagram", name: "instagram", placeholder: "instagram.com/..." },
    { label: "Github", name: "github", placeholder: "github.com/..." },
  ];

  const formik = useFormik({
    initialValues: {
      fullName: profile.fullName || "",
      aboutMe: profile.aboutMe || "",
      job: profile.lookingForAJobDescription || "",
      facebook: profile.contacts.facebook || "",
      vk: profile.contacts.vk || "",
      twitter: profile.contacts.twitter || "",
      instagram: profile.contacts.instagram || "",
      github: profile.contacts.github || "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(40, " ").nullable(),
      aboutMe: Yup.string().max(40, " ").nullable(),
      job: Yup.string().max(40, " ").nullable(),
      facebook: Yup.string().max(40, " ").nullable(),
      vk: Yup.string().max(40, " ").nullable(),
      twitter: Yup.string().max(40, " ").nullable(),
      instagram: Yup.string().max(40, " ").nullable(),
      github: Yup.string().max(40, " ").nullable(),
    }),
    onSubmit: (values) => {
      setEditMode(false);
      let profileData = {
        fullName: values.fullName,
        aboutMe: values.aboutMe,
        lookingForAJob: !!values.job,
        lookingForAJobDescription: values.job,
        contacts: {
          github: values.github || null,
          vk: values.vk || null,
          facebook: values.facebook || null,
          instagram: values.instagram || null,
          twitter: values.twitter || null,
          website: null,
          youtube: null,
          mainLink: null,
        },
      };
      saveProfile(profileData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.wrapper}>
      {fieldsArray.map((field) => {
        return (
          <div key={field.name} className={s.fieldItem}>
            <div className={s.label}>{field.label}:</div>
            <input
              className={
                !formik.errors[field.name] ? s.input : `${s.input} ${s.error}`
              }
              name={field.name}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              placeholder={field.placeholder}
            ></input>
          </div>
        );
      })}
      <div className={s.buttonsArea}>
        <div
          className={s.button}
          onClick={() => {
            setEditMode(false);
          }}
        >
          Cancel
        </div>
        <div className={s.button} onClick={formik.handleSubmit}>
          Submit
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
