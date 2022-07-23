import React from "react";
import s from "./NewMessage.module.css";
import User from "../../../User/User";
import { useFormik } from "formik";
import * as Yup from "yup";

const NewMessage = (props) => {
  const formik = useFormik({
    initialValues: {
      messageBody: "",
    },
    validationSchema: Yup.object({
      messageBody: Yup.string().max(50, "50 characters or less").required(""),
    }),
    onSubmit: (values) => {
      props.sendMessage(values.messageBody);
      formik.handleReset();
    },
  });

  return (
    <div className={s.wrapper}>
      <User user={props.profileData.myProfile} />
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <input
          className={s.input}
          name="messageBody"
          type="textarea"
          placeholder="Insert your message..."
          onChange={formik.handleChange}
          value={formik.values.messageBody}
        />
        <div className={s.error}>
          {formik.errors.messageBody && formik.errors.messageBody}
        </div>
        <div
          onClick={formik.handleSubmit}
          className={formik.isValid ? s.button : `${s.button} ${s.disabled}`}
        >
          Send
        </div>
      </form>
    </div>
  );
};

export default NewMessage;
