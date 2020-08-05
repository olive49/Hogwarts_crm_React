import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [adminArray, setAdminArray] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="admin_login">
      <form className="admin_login_form" onSubmit={handleSubmit(onSubmit)}>
        <span className="admin_login_span">Email</span>
        <input
          type="email"
          name="email"
          className="admin_login_input"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error_message">This field is required</span>
        )}
        <span className="admin_login_span">Password</span>
        <input
          type="password"
          name="password"
          className="admin_login_input"
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
        <button className="admin_login_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
