import React, { Component } from "react";

const FirstName = (props) => {
  const { register, errors } = props;
  return (
    <div>
      {" "}
      <span className="add_student_span">First Name</span>
      <input
        type="text"
        name="firstName"
        className="input_style"
        ref={register({ required: true })}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default FirstName;
