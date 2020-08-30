import React from "react";
import { useLocation } from "react-router-dom";

type Props = {
  register: Function;
  errors: Error;
  mockStudent: String;
};

const Email = ({ register, errors, mockStudent }: Props) => {
  // const { register, errors, mockStudent } = props;
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
          location.pathname == "/edit_student" ? mockStudent["Email"] : ""
        }
      />
      {errors["Email"] && errors["Email"].type === "required" && (
        <span className="error_message">This field is required</span>
      )}
    </div>
  );
};

export default Email;
