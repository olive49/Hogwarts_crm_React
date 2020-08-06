import React, { Component } from "react";

const Email = (props) => {
  const { register, errors } = props;

  return (
    <div style={{ height: "6rem", marginTop: "1rem", marginBottom: "-0.8rem" }}>
      <span className="add_student_span input_span">Email</span>
      <input
        type="email"
        name="email"
        className="input_style"
        ref={register({ required: true })}
      />
      {errors.email && errors.email.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default Email;
