import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Email from "./Email.jsx";

const AdminSignUp = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    if (data.password != data.password_confirmed) {
      alert("passwords do not match");
      return false;
    } else {
      console.log(data);
      alert(`Welcome to Hogwarts, ${data.fullName}`);
      e.target.reset();
      return true;
    }
  };

  useEffect(() => {
    fetch("/admin/signup").then((response) => console.log(response));
  }, []);

  return (
    <div className="admin_signup">
      <form className="admin_signup_form" onSubmit={handleSubmit(onSubmit)}>
        <span className="admin_signup_span">Name</span>
        <input
          type="text"
          name="fullName"
          className="admin_signup_input"
          ref={register({ required: true })}
        />
        {errors.fullName && errors.fullName.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <Email register={register} errors={errors} />
        <span className="admin_signup_span">Password</span>
        <input
          type="password"
          name="password"
          className="admin_signup_input"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span className="error_message">
            Password must be at least 8 characters
          </span>
        )}
        <span className="admin_signup_span">Confirm password</span>
        <input
          type="password"
          name="password_confirmed"
          className="admin_signup_input"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />
        <button className="admin_signup_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
