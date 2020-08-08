import React, { useState } from "react";

const DesiredSkillItem = (props) => {
  const { skill, register, errors } = props;

  return (
    <li>
      <input
        type="checkbox"
        id={skill.name}
        name="desiredSkill"
        ref={register}
      />
      {/* {errors.desiredSkill && errors.desiredSkill.type === "required" && (
        <span className="error_message">This field is required</span>
      )} */}
      <label htmlFor={skill.skill} className="skills_label">
        {skill.name}
      </label>
    </li>
  );
};

export default DesiredSkillItem;
