import { useFormik } from "formik";
import s from "./Login.module.css";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const errorMes = {
    emailLength: "Email must be 30 characters or less",
    emailRequired: "Email is required",
    incorrect: "Incorrect email",
    passwordLength: "Password must be 20 characters or less",
    passwordRequired: "Password is required",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(30, errorMes.emailLength)
        .email(errorMes.incorrect)
        .required(errorMes.emailRequired),
      password: Yup.string()
        .max(20, errorMes.passwordLength)
        .required(errorMes.passwordRequired),
    }),
    onSubmit: (values) => {
      props.login(values.email, values.password, values.rememberMe);
      if (props.isAuth) formik.handleReset();
    },
  });

  let emailError =
    (formik.touched.email && formik.errors.email) ||
    formik.errors.email === errorMes.emailLength;
  let passwordError =
    (formik.touched.password && formik.errors.password) ||
    formik.errors.password === errorMes.passwordLength;

  if (props.isAuth) return <Redirect to={"/profile"} />;
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Login</div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
          className={emailError ? `${s.login} ${s.error}` : s.login}
          onBlur={formik.handleBlur}
        />
        <div className={s.errorDescription}>
          {emailError ? formik.errors.email : null}
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
            Sign In
          </div>
        </div>
      </form>
      <div className={s.responseError}>{props.responseError}</div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  responseError: state.auth.responseError,
});
export default connect(mapStateToProps, { login })(Login);
