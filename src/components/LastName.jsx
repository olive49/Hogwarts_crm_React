import React, { Component } from "react";

const LastName = (props) => {
  const { register, errors } = props;
  return (
    <div style={{ marginTop: "1rem" }}>
      <span className="add_student_span">Last Name</span>
      <input
        type="text"
        name="lastName"
        className="input_style"
        ref={register({ required: true })}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default LastName;
