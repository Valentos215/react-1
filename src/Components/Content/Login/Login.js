import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <Field
        placeholder="Login"
        name={"login"}
        component={"input"}
        className={s.login}
      />
      <Field
        placeholder="Password"
        name={"password"}
        component={"input"}
        className={s.password}
      />
      <div className={s.confilm}>
        <div className={s.rememberMe}>
          <Field name={"rememberMe"} type="checkbox" component={"input"} />{" "}
          Remember me
        </div>
        <div onClick={props.handleSubmit} className={s.button}>
          Login
        </div>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Login</div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
