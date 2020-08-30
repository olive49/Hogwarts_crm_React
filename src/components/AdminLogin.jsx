import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Email from "./Email.tsx";
import axios from "axios";

const AdminLogin = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [adminArray, setAdminArray] = useState([]);

  const onSubmit = (data) => {
    axios
      .get("/admin/login", {
        admin_email: data.email,
        adminPassword: data.password,
      })
      .then(function (response) {
        alert(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="admin_login">
      <form className="admin_login_form" onSubmit={handleSubmit(onSubmit)}>
        <Email register={register} errors={errors} />
        <span className="admin_login_span">Password</span>
        <input
          type="password"
          name="password"
          className="input_style"
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
        <button className="admin_login_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
