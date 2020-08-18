import React from "react";
import { useLocation } from "react-router-dom";

const LastName = (props) => {
  const { register, errors, mockStudent } = props;
  const location = useLocation();

  return (
    <div style={{ marginTop: "1rem" }}>
      <span className="add_student_span">Last Name</span>
      <input
        type="text"
        name="last_name"
        className="input_style"
        ref={register({ required: true })}
        defaultValue={
          location.pathname == "/edit_student" ? mockStudent.last_name : ""
        }
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default LastName;
