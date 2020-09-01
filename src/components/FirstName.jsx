import React, { Component } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";

const FirstName = ({ register, errors, mockStudent }) => {
  const location = useLocation();

  return (
    <div>
      <span className="add_student_span">First Name</span>
      <input
        type="text"
        name="first_name"
        className="input_style"
        ref={register({ required: true })}
        defaultValue={
          location.pathname == "/edit_student" ? mockStudent["First_name"] : ""
        }
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default FirstName;
