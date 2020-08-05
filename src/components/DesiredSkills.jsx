import React, { useState } from "react";
import { useForm } from "react-hook-form";

const DesiredSkills = (props) => {
  const { skill } = props;

  const { register } = useForm();

  return (
    <li>
      <input
        type="checkbox"
        id={skill.skill}
        name={skill.skill}
        ref={register}
      />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkills;
