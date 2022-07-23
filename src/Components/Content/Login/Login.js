import { useFormik } from "formik";
import s from "./Login.module.css";
import * as Yup from "yup";

const Login = () => {
  const errorMes = {
    loginLength: "Email must be 30 characters or less",
    loginRequired: "Email is required",
    loginEmail: "Incorrect email",
    passwordLength: "Password must be 20 characters or less",
    passwordRequired: "Password is required",
  };
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .max(30, errorMes.loginLength)
        .email(errorMes.loginEmail)
        .required(errorMes.loginRequired),
      password: Yup.string()
        .max(20, errorMes.passwordLength)
        .required(errorMes.passwordRequired),
    }),
    onSubmit: (values) => {
      console.log(values);
      console.log(formik.isValid);
      formik.handleReset();
    },
  });

  let loginError =
    (formik.touched.login && formik.errors.login) ||
    formik.errors.login === errorMes.loginLength;
  let passwordError =
    (formik.touched.password && formik.errors.password) ||
    formik.errors.password === errorMes.passwordLength;

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Login</div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <input
          name="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          placeholder="Email"
          className={loginError ? `${s.login} ${s.error}` : s.login}
          onBlur={formik.handleBlur}
        />
        <div className={s.errorDescription}>
          {loginError ? formik.errors.login : null}
        </div>
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          className={passwordError ? `${s.password} ${s.error}` : s.password}
          onBlur={formik.handleBlur}
        />
        <div className={s.errorDescription}>
          {passwordError ? formik.errors.password : null}
        </div>
        <div className={s.confilm}>
          <div className={s.rememberMe}>
            <input
              name="rememberMe"
              type="checkbox"
              onChange={formik.handleChange}
            />{" "}
            Remember me
          </div>
          <div
            onClick={formik.handleSubmit}
            className={formik.isValid ? s.button : `${s.button} ${s.disabled}`}
          >
            Sign Up
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
