import React, { useState } from "react";
import { useForm } from "react-hook-form";

const DesiredSkillItem = (props) => {
  const { skill } = props;

  const { register } = useForm();

  const handleChange = (e) => {
    const skillName = e.target.id;
    props.desiredSkillsUpdate(skillName);
  };

  return (
    <li>
      <input
        type="checkbox"
        id={skill.name}
        name={skill.name}
        ref={register}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkillItem;
