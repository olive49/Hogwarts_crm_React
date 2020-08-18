import React from "react";
import { useLocation } from "react-router-dom";

const Email = (props) => {
  const { register, errors, mockStudent } = props;
  const location = useLocation();

  return (
    <div style={{ marginTop: "1rem" }}>
      <span className="add_student_span input_span">Email</span>
      <input
        type="email"
        name="email"
        className="input_style"
        ref={register({ required: true })}
        defaultValue={
          location.pathname == "/edit_student" ? mockStudent.email : ""
        }
      />
      {errors.email && errors.email.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default Email;
