import React from "react";
import PostedItem from "./PostedItem/PostedItem";
import s from "./UsPosts.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addPost } from "../../../../redux/profile-reducer";

const UsPosts = React.memo((props) => {
  const errorMes = {
    length: "Post must be 75 characters or less",
  };

  const postsArray = props.wallData.map((post) => (
    <PostedItem
      postText={post.text}
      likes={post.likes}
      user={props.users[post.usId - 1]}
      key={post.id}
    />
  ));

  const formik = useFormik({
    initialValues: {
      postBody: "",
    },
    validationSchema: Yup.object({
      postBody: Yup.string().max(75, errorMes.length).required(""),
    }),
    onSubmit: (values) => {
      props.addPost(values.postBody);
      formik.handleReset();
    },
  });

  return (
    <div className={s.postsArea}>
      <div className={s.title}>My posts</div>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <input
          name="postBody"
          type="textarea"
          onChange={formik.handleChange}
          value={formik.values.postBody}
          placeholder="your news..."
          className={s.input}
        ></input>
        <div className={s.errorText}>
          {formik.errors.postBody && formik.errors.postBody}
        </div>
        <div
          onClick={formik.handleSubmit}
          className={formik.isValid ? s.button : s.buttonDisabled}
        >
          Send
        </div>
      </form>
      <div className={s.posted}>{postsArray}</div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    wallData: state.profileData.myProfile.wallData,
    users: state.usersData.users,
  };
};

export default connect(mapStateToProps, { addPost })(UsPosts);
