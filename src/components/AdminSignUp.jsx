import React from "react";
import { useForm } from "react-hook-form";

const AdminSignUp = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    if (data.password != data.password_confirmed) {
      alert("passwords do not match");
      return false;
    } else {
      console.log(data);
      alert(`Welcome to Hogwarts, ${data.fullName}`);
      localStorage.setItem(data);
      e.target.reset();
      return true;
    }
  };

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
        <span className="admin_signup_span">Email</span>
        <input
          type="email"
          name="email"
          className="admin_signup_input"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <span className="admin_signup_span">Password</span>
        <input
          type="password"
          name="password"
          className="admin_signup_input"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span className="error_message">
            Password must be at least 6 characters
          </span>
        )}
        <span className="admin_signup_span">Confirm password</span>
        <input
          type="password"
          name="password_confirmed"
          className="admin_signup_input"
          ref={register({
            required: true,
            minLength: 6,
          })}
        />
        {errors.password_confirmed &&
          errors.password_confirmed.type === "required" && (
            <span className="error_message">This field is required</span>
          )}
        {errors.password_confirmed &&
          errors.password_confirmed.type === "minLength" && (
            <span className="error_message">
              Password must be at least 6 characters
            </span>
          )}
        <button className="admin_signup_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;
